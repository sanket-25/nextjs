import mongoose from "mongoose";

const productModel = new mongoose.Schema({
    name:String,
    price:String,
    color:String
});

export const Product = mongoose.models.one || mongoose.model("one", productModel);