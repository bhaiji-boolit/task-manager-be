import { Router } from 'express'
import { projectRouter } from '../ProjectService/api/index.js'

const router = Router()

router.use('/project', projectRouter)

export default router
