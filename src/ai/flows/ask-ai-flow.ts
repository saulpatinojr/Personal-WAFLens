'use server';
/**
 * @fileOverview A simple AI flow for answering user questions.
 *
 * - askAi - A function that takes a user's prompt and returns an AI-generated response.
 * - AskAiInput - The input type for the askAi function.
 * - AskAiOutput - The return type for the askAi function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskAiInputSchema = z.object({
  prompt: z.string().describe('The user\'s question or prompt.'),
});
export type AskAiInput = z.infer<typeof AskAiInputSchema>;

const AskAiOutputSchema = z.object({
  response: z.string().describe('The AI\'s response to the prompt.'),
});
export type AskAiOutput = z.infer<typeof AskAiOutputSchema>;

export async function askAi(input: AskAiInput): Promise<AskAiOutput> {
  return askAiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAiPrompt',
  input: {schema: AskAiInputSchema},
  output: {schema: AskAiOutputSchema},
  prompt: `You are a helpful assistant. Please answer the following question:
  
  {{{prompt}}}`,
});

const askAiFlow = ai.defineFlow(
  {
    name: 'askAiFlow',
    inputSchema: AskAiInputSchema,
    outputSchema: AskAiOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
