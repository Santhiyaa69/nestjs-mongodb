import { Body, Controller,Post,Get,Param, Delete, Patch } from "@nestjs/common";
import { get } from "http";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController{
    constructor(readonly productsService: ProductsService){}
    @Post()
       async addProduct(
            @Body('title') prodTitle:string,
            @Body('price') prodPrice:number,
            ){
            const product=await this.productsService.insertproduct(prodTitle,prodPrice)
            return product
        }
   
    @Get()
       async getAllProducts(){
            const fetch=await this.productsService.fetchProducts( )
            return fetch
            
        }
    @Get(':id')
        async getProduct(@Param('id') prodId:string){
          const fetchById= await this.productsService.getSingleProduct(prodId)
          return fetchById
        }
    
    @Delete(':id')
        async deleteProduct(@Param('id') prodId:string){
            await  this.productsService.deleteProduct(prodId)
            return "Deleted Successfully"
        }
    @Patch(':id')
        async updateProduct(
            @Param('id') prodId:string,
            @Body('title') prodTitle:string,
            @Body('price') prodPrice:number){
               await this.productsService.updateProduct(prodId,prodTitle,prodPrice)
                return "Updated"
        }

}


