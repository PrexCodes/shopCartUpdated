import { Schema, model } from "mongoose";
import { iProduct } from "../interfaces/Product.interface";

const ProductSchema : Schema<iProduct> = new Schema({
    prodID: {type: String, required: true},
    prodName: {type: String, required: true},
    price: {type: Number, required: true} 
},
    {timestamps: true}
)

const ProductModel = model<iProduct>('Product', ProductSchema)

export default ProductModel