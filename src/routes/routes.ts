import express from 'express'
import { PromptController } from '../controllers/promptController'

const router = express.Router()
const promptController = new PromptController()

router.post('/api/prompt', promptController.sendText)

export { router }