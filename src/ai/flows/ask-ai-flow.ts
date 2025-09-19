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
  prompt: z.string().describe("The user's question or prompt."),
});
export type AskAiInput = z.infer<typeof AskAiInputSchema>;

const RecommendationSchema = z.object({
  name: z.string().describe('The name of the resource or item.'),
  uuid: z.string().describe('The unique identifier (UUID) of the resource.'),
  type: z.string().describe('The type of the resource.'),
  recommendation_action: z
    .string()
    .describe('The recommended action to take.'),
  date: z
    .string()
    .describe('The date for the recommendation in YYYY-MM-DD format.'),
  state: z.string().describe('The current state of the item.'),
});

const AskAiOutputSchema = z.object({
  response: z.union([
    z.string().describe('A simple text response to the prompt.'),
    z.array(RecommendationSchema).describe('A list of structured recommendations.'),
  ]),
});
export type AskAiOutput = z.infer<typeof AskAiOutputSchema>;

export async function askAi(input: AskAiInput): Promise<AskAiOutput> {
  return askAiFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askAiPrompt',
  input: {schema: AskAiInputSchema},
  output: {schema: AskAiOutputSchema},
  prompt: `You are a helpful assistant for the Azure Well-Architected Framework.
  
Analyze the user's question. 

If the user is asking for recommendations or a list of items, you MUST respond with a structured array of recommendations. Each item in the array should include a name, uuid, type, recommendation_action, date, and state.

If the user is asking a general question that does not require a structured list, you may respond with a simple text string.

User question:
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
