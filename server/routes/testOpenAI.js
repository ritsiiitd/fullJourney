import { Configuration, OpenAIApi } from 'openai';
const test=async()=>{
    const configuration = new Configuration({
        apiKey: "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",
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.listModels();
      console.log(response);
}

export default test;