import appRoutes from './services/api/index.js'
import express from 'express'
import cors from 'cors'

const app = express()

const PORT = process.env.PORT || 8080

app.use(cors())

appRoutes(app)

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`))
