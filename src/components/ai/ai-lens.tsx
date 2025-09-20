'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Bot, X, Pin, PinOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { askAi, AskAiOutput } from '@/ai/flows/ask-ai-flow';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

type AiLensState = 'hidden' | 'floating' | 'docked';

type Message = {
  id: number;
  sender: 'user' | 'ai';
  content: AskAiOutput['response'];
};

const examplePrompts = [
  "Show me all virtual machines that need reliability improvements.",
  "What are the most expensive resources this month?",
  "List all security recommendations for storage accounts.",
  "Which resources have performance warnings?",
  "Summarize the cost optimization opportunities.",
];

export function AiLens() {
  const [state, setState] = useState<AiLensState>('hidden');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isCycling, setIsCycling] = useState(true);
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (state !== 'hidden' && isCycling) {
      interval = setInterval(() => {
        setCurrentPlaceholderIndex((prevIndex) => (prevIndex + 1) % examplePrompts.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [state, isCycling]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleUserInteraction = () => {
    if (isCycling) {
      setIsCycling(false);
    }
  };

  const handleSubmit = async () => {
    handleUserInteraction();
    if (!prompt) {
      toast({
        variant: 'destructive',
        title: 'Prompt is required',
        description: 'Please enter a question or prompt.',
      });
      return;
    }

    const userMessage: Message = { id: Date.now(), sender: 'user', content: prompt };
    setMessages((prev) => [...prev, userMessage]);
    setPrompt('');
    setIsLoading(true);

    try {
      const result = await askAi({ prompt });
      const aiMessage: Message = { id: Date.now() + 1, sender: 'ai', content: result.response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('AI Error:', error);
      toast({
        variant: 'destructive',
        title: 'An error occurred',
        description: 'Failed to get a response from the AI.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetState = () => {
    setPrompt('');
    setMessages([]);
    setIsLoading(false);
    setIsCycling(true);
    setCurrentPlaceholderIndex(0);
  };

  const handleClose = () => {
    setState('hidden');
    resetState();
  };

  const handleToggleDock = () => {
    setState(state === 'docked' ? 'floating' : 'docked');
  };

  const handleFabClick = () => {
    setState('floating');
    setIsCycling(true);
  };

  if (state === 'hidden') {
    return (
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
        onClick={handleFabClick}
      >
        <Bot className="h-6 w-6" />
        <span className="sr-only">AI Lens</span>
      </Button>
    );
  }

  const renderMessageContent = (content: AskAiOutput['response']) => {
    if (typeof content === 'string') {
      return <p className="prose prose-sm max-w-none">{content}</p>;
    }

    if (Array.isArray(content) && content.length > 0) {
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>UUID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Recommendation</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>State</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {content.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.name}</TableCell>
                <TableCell className="truncate max-w-[100px]">{item.uuid}</TableCell>
                <TableCell>{item.type}</TableCell>
                <TableCell>{item.recommendation_action}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.state}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }

    if (Array.isArray(content) && content.length === 0) {
      return (
        <p className="prose prose-sm max-w-none">
          No recommendations were found for your query.
        </p>
      );
    }

    return null;
  };

  return (
    <Card
      className={cn(
        "z-50 flex flex-col backdrop-blur-sm bg-background/80",
        state === 'floating' && "fixed bottom-6 right-6 w-[720px] h-[560px] shadow-2xl rounded-xl border",
        state === 'docked' && "w-full h-auto border-t-2 rounded-none"
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback>
              <Bot className="h-5 w-5" />
            </AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <CardTitle className="text-lg">AI Lens</CardTitle>
            <CardDescription>Your intelligent Well-Architected Framework assistant.</CardDescription>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleToggleDock}>
            {state === 'docked' ? <PinOff className="h-4 w-4" /> : <Pin className="h-4 w-4" />}
            <span className="sr-only">{state === 'docked' ? 'Undock' : 'Dock'}</span>
          </Button>
          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={handleClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col flex-1 p-0">
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex w-max max-w-[85%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                message.sender === 'user'
                  ? "ml-auto bg-primary text-primary-foreground"
                  : "bg-muted"
              )}
            >
              {renderMessageContent(message.content)}
            </div>
          ))}
          {isLoading && (
            <div className="flex w-max max-w-[85%] flex-col gap-2 rounded-lg px-3 py-2 text-sm bg-muted">
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}
        </div>
        <div className="p-4 border-t bg-background/95">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              placeholder={
                isCycling
                  ? examplePrompts[currentPlaceholderIndex]
                  : "e.g., Show me all virtual machines that need reliability improvements."
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onFocus={handleUserInteraction}
              onKeyDownCapture={(e) => {
                handleUserInteraction();
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              className="resize-none pr-16"
              disabled={isLoading}
            />
          </div>
          <div className="mt-2 flex justify-end">
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Thinking...' : 'Ask AI'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
