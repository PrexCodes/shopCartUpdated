import { iProduct } from "../interfaces/Product.interface";
import ProductModel from "../model/Product";
import mongoose from "mongoose";
import {Request, Response} from 'express'

export const createProduct = async(req: Request<{}, {}, iProduct>, res: Response)=>{
    try {
        let {prodName, price} = req.body
        let product = new ProductModel({
            prodName,
            price,
        })
        product.prodID = product._id
        const newProduct = await product.save()
        return res.status(201).json({
            message: 'Created Successfully',
            data: newProduct
        })
    } catch (error) {
        return
    }
}