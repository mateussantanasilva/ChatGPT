import { Configuration, OpenAIApi } from 'openai'
import 'dotenv/config'

export class Openai { 

    static configuration() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        })

        return new OpenAIApi(configuration)
    } 

    static textCompletion( textSent:string ) {
        return {
            model: 'text-davinci-003',
            prompt: `${textSent}`,
            temperature: 0.7,
            max_tokens: 3500,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        }
    }
}