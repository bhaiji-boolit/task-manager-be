import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => {
    console.log('HERE')
    res.send('Project API')
})

export const projectRouter = router
