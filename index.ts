import { OpenAI } from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';
import { chatGPTAPIFirstQuery, chatGPTAPISecondQuery } from './prompt';

const openAI = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 1000 * 60 * 20, // 20 minutes, or change to whatever
});

async function main() {
  const history: ChatCompletionMessageParam[] = [
    {
      role: 'user',
      content: chatGPTAPIFirstQuery,
    },
  ];
  console.log(new Date());
  const firstInstructionStream = await openAI.chat.completions.create({
    model: 'gpt-3.5-turbo-16k',
    messages: history,
    temperature: 0.0,
    stream: true,
  });
  let firstInstructionText = '';
  for await (const chunk of firstInstructionStream) {
    if (chunk?.choices[0]?.delta?.content) {
      firstInstructionText += chunk.choices[0].delta.content;
      process.stdout.write(chunk.choices[0].delta.content);
    }
  }
  history.push({
    role: 'assistant',
    content: firstInstructionText,
  });
  console.log();

  /**
   * Second Query, takes long times(over 10 minutes) to get response
   * Then thrown error
   */
  history.push({
    role: 'user',
    content: chatGPTAPISecondQuery,
  });
  console.log('second Query started at : ', new Date());
  try {
    const recipeStructuredTextStream = await openAI.chat.completions.create({
      model: 'gpt-3.5-turbo-16k',
      messages: history,
      temperature: 0.0,
      stream: true,
    });
    let recipeStructuredText = '';
    for await (const chunk of recipeStructuredTextStream) {
      if (chunk?.choices[0]?.delta?.content) {
        recipeStructuredText += chunk.choices[0].delta.content;
        process.stdout.write(chunk.choices[0].delta.content);
      }
    }
    history.push({
      role: 'assistant',
      content: recipeStructuredText,
    });
    console.log('finished at : ', new Date());
  } catch (e) {
    console.log('error occured at : ', new Date());
    console.log(e);
  }
}

main();
