import { Document } from "mongoose";

export interface iCustomer extends Document{
    name: string
    email: string
    phoneNumber: number
    address?: string
    cart?: {
        prodID: string;
        prodName: string
    }[]
}

