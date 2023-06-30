import mongoose from "mongoose";

import { envVariables } from "./envVariable";


const URL = envVariables.MONGO_LOCATION!

async function dBCONFIG() {
    try {
        const connU = await mongoose.connect(URL)

        console.log('DB Connected to ', connU.connection.host)
    } catch (error) {
        console.log(error)
    }
}

export default dBCONFIG