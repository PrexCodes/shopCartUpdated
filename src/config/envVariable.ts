import dotenv from 'dotenv'
dotenv.config()

export const envVariables = {
    PORT: process.env.PORT,
    MONGO_LOCATION: process.env.MONGODB_LOCAL
}