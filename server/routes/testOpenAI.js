import { Configuration, OpenAIApi } from 'openai';
const test=async()=>{
    const configuration = new Configuration({
        apiKey: "",
      });
      const openai = new OpenAIApi(configuration);
      const response = await openai.listModels();
      console.log(response);
}

export default test;