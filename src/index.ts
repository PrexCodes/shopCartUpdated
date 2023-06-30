import express from 'express'
import appConfig from './app';
import dotenv from 'dotenv'
import { envVariables } from './config/envVariable';
import dBCONFIG from './config/DB';

const app = express();

const port = envVariables.PORT;

const server = async() =>{
    try {
        dBCONFIG()
        appConfig(app)
        app.listen(port, ()=>{
            console.log('Listening on a port', port)
        })
    } catch (error) {
        console.log('Error', error)
    }
} 

server();