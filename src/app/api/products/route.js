import { connectionSrt } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    let data = []
    try {
        await mongoose.connect(connectionSrt);
        const data = await Product.find();
    }
    catch (error) {
        data = { success: false }
    }
    console.log(data);
    return NextResponse.json({ result: data, success: true });
}

// export async function POST(){
//     await mongoose.connect(connectionSrt);
//     let product = new Product({
//         name:"Hello",
//         price:"3333",
//         color:"red"
//     });
//     const result = await product.save();
//     return NextResponse.json({result, success: true})
// }