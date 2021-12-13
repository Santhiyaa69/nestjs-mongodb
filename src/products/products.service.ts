import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./product.model";



@Injectable()
export class ProductsService {


    constructor(@InjectModel('Product')readonly productModel:Model<Product>){

    }
     async insertproduct(title: string, price: number) {
        const newProduct = new this.productModel({title, price})
        const result=await newProduct.save()
        return result
      
    }

    async fetchProducts(){
        const fetch= await this.productModel.find()
        return fetch
    }
    async getSingleProduct(productId:string){
        const product=await this.productModel.findById(productId)
        if(!product){
            throw new NotFoundException('no product in the id')
        }
        return product
    }
    async deleteProduct(productId:string){
        const product=await this.productModel.findByIdAndDelete(productId)
        if(!product){
            throw new NotFoundException('no product in the id')
        }
        return product
    }
    async updateProduct(productId:string,title:string,price:number){
     
        const updatedProduct=await this.productModel.findByIdAndUpdate(productId)
      
        if(!updatedProduct){
            throw new NotFoundException('no product in the id')
        }
        if(title){
            updatedProduct.title=title
        }
        if(price){
            updatedProduct.price=price
        }
        const result=await updatedProduct.save()
        return result
    }
   
}












   
   
   
   
   
   
   
   
// export class ProductsService {
   
    // products: Product[]=[] ;
    // insertproduct(title: string, price: number) {
    //     const proId=Math.random().toString()
    //     const newProduct = new Product(proId,title, price);
    //     this.products.push(newProduct);
    //     return this.products
    //  }

    // fetchProducts(){
    //     return this.products
    // }
    // getSingleProduct(productId:string){
    //     const product=this.products.find(prod=>prod.id ==productId)
    //     if(!product){
    //         throw new NotFoundException('no product in the id')
    //     }
    //     return {...product}
    // }
    // deleteProduct(productId:string){
    //     const productIndex=this.products.findIndex(prod=>prod.id ==productId)
    //     const product=this.products[productIndex]
    //     //console.log(product)
    //     if(!product){
    //         throw new NotFoundException('no product in the id')
    //     }
    //     return this.products.splice(productIndex)
    // }
    // updateProduct(productId:string,title:string,price:number){
    //     const productIndex=this.products.findIndex(prod=>prod.id ==productId)
    //     const product=this.products.find(prod=>prod.id ==productId)
    //     const updatedProduct={...product}
    //     if(!product){
    //         throw new NotFoundException('no product in the id')
    //     }
    //     if(title){
    //         updatedProduct.title=title
    //     }
    //     if(price){
    //         updatedProduct.price=price
    //     }
    //     this.products[productIndex]=updatedProduct
    //     //console.log(updatedProduct)
    // }
// }