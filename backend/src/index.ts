import { app } from '../app'
import connectToDB from './db'

const PORT = process.env.PORT || 8000
connectToDB()
    .then(() => {
        const server = app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })

        server.on('error', (error) => {
            console.error('Server error:', error)
        })
    })
    .catch((err) => {
        console.log('MONGO DB CONNECTION_ERROR ', err)
    })
