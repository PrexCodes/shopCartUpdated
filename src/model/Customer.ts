import { Schema, model } from "mongoose";
import { iCustomer } from "../interfaces/customer.interface";

const CustomerSchema: Schema<iCustomer> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true },
    address: { type: String },
    cart: {type: [{
        prodID: String,
        prodName: String
    }]}
  },
  { timestamps: true }
);

const CustomerModel = model<iCustomer>("Customer", CustomerSchema);

export default CustomerModel;
