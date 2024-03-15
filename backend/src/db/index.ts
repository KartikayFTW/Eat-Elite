import mongoose from 'mongoose'

import { DB_NAME } from '../utils/constants'

const connectToDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        )
        console.log(
            `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.port}`
        )
    } catch (error) {
        console.log('MONGODB connection error ', error)
        process.exit(1)
    }
}

export default connectToDB
