"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Search, X, Pin, PinOff } from 'lucide-react';
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

type AiLensState = 'hidden' | 'floating' | 'docked';

export function AiLens() {
  const [state, setState] = useState<AiLensState>('hidden');
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<AskAiOutput['response'] | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (!prompt) {
      toast({
        variant: 'destructive',
        title: 'Prompt is required',
        description: 'Please enter a question or prompt.',
      });
      return;
    }

    setIsLoading(true);
    setResponse(null);

    try {
      const result = await askAi({ prompt });
      setResponse(result.response);
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
    setResponse(null);
    setIsLoading(false);
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
  };

  if (state === 'hidden') {
    return (
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50"
        size="icon"
        onClick={handleFabClick}
      >
        <Search className="h-6 w-6" />
        <span className="sr-only">AI Lens</span>
      </Button>
    );
  }

  const renderResponse = () => {
    if (isLoading) {
      return (
        <div className="space-y-2 p-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      );
    }

    if (!response) {
      return null;
    }

    if (typeof response === 'string') {
      return (
        <div className="p-4 border rounded-md bg-muted/50 text-sm prose prose-sm max-w-none">
          {response}
        </div>
      );
    }

    if (Array.isArray(response)) {
      return (
        <Card className="bg-transparent">
          <CardContent className="p-0">
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
                {response.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.uuid}</TableCell>
                    <TableCell>{item.type}</TableCell>
                    <TableCell>{item.recommendation_action}</TableCell>
                    <TableCell>{item.date}</TableCell>
                    <TableCell>{item.state}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      );
    }

    return null;
  }

  return (
    <Card
      className={cn(
        "z-50 flex flex-col backdrop-blur-sm bg-background/80",
        state === 'floating' && "fixed bottom-6 right-6 w-[720px] h-[560px] shadow-2xl rounded-xl border",
        state === 'docked' && "w-full h-auto border-t-2 rounded-none"
      )}
    >
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <div className="space-y-1">
          <CardTitle className="text-lg">AI Lens</CardTitle>
          <CardDescription>Ask about your infrastructure or the Well-Architected Framework.</CardDescription>
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
      <CardContent className="flex flex-col gap-4 p-4 pt-0 flex-1">
        <Textarea
          placeholder="e.g., Show me all virtual machines that need reliability improvements."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className={cn(
            "resize-none bg-transparent",
            state === 'floating' && "h-[120px]",
            state === 'docked' && "h-16"
          )}
          disabled={isLoading}
        />
        <div className="flex-1 overflow-y-auto space-y-4">
          {renderResponse()}
        </div>
         <div className="mt-auto flex justify-end">
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Thinking...' : 'Ask AI'}
            </Button>
          </div>
      </CardContent>
    </Card>
  );
}
