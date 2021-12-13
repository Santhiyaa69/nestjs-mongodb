import *as mongoose from 'mongoose'

export const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

export interface Product{
        id:string,
        title:string,
        price:number
}

// export class Product{
//     constructor(
//         public id:string,
//         public title:string,
//         public price:number){

//     }
// }