"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Wand2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { askAi } from '@/ai/flows/ask-ai-flow';
import { Skeleton } from '@/components/ui/skeleton';

export function AiLens() {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState('');
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
    setResponse('');

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

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setPrompt('');
      setResponse('');
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        size="icon"
        onClick={() => handleOpenChange(true)}
      >
        <Wand2 className="h-6 w-6" />
        <span className="sr-only">AI Lens</span>
      </Button>
      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>AI Lens</DialogTitle>
            <DialogDescription>
              Ask our AI anything about your infrastructure or the Well-Architected Framework.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Textarea
              placeholder="e.g., How can I improve the reliability of my virtual machines?"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="min-h-[100px]"
              disabled={isLoading}
            />
            {isLoading && (
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            )}
            {response && (
              <div className="p-4 border rounded-md bg-muted text-sm">
                {response}
              </div>
            )}
          </div>
          <DialogFooter>
            <Button onClick={handleSubmit} disabled={isLoading}>
              {isLoading ? 'Thinking...' : 'Ask AI'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
