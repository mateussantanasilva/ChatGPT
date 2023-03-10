import { Request, Response } from 'express'
import { Openai } from '../config/openia'
import { InputPrompt } from '../models/inputModel'

export class PromptController {
    async sendText(req: Request, res: Response) {

        const openAI = Openai.configuration()
        const textSent = new InputPrompt(req.body.prompt).prompt

        try{
            const textAnswer = await openAI.createCompletion(
                Openai.textCompletion(textSent)
            )
    
            return res.status(200).json({
                sucess: true,
                data: textAnswer.data.choices[0].text
            })
    
        } catch (error) {

            return res.status(400).json({
                sucess: false,
                error: error
            })
        }
    }
}
    
