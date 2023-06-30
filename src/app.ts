import cors from 'cors';
import express, { Application } from 'express'
import router from './router/productRoute';

function appConfig(app: Application){
    console.log('From App Config');
    app.use(express.json()).use(cors())
    .use('/api', router)
}

export default appConfig