import { UserType } from "src/users/types/user.types";
import ProductModel from './product.schema'
import { ProductType } from "./types/product.types";


export class ProductService {

    async create(product: ProductType) {
        const createdProduct = await ProductModel.create(product)

        return createdProduct
    }

    async list() {
        const listedproducts = await ProductModel.find()

        return listedproducts
    }

    async find(id) {
        const findedproducts = await ProductModel.findById

        return findedproducts
    }

    async update(id, dataToUpdate: ProductType) {
        const updatedProduct = await ProductModel.findByIdAndUpdate({_id: id},{
            name: dataToUpdate.name,
            quantity: dataToUpdate.quantity,
            price: dataToUpdate.price
        }, {new:true})
        return updatedProduct
    }

    async delete(id) {
        await ProductModel.findByIdAndDelete({_id: id})
        return 
        
    }
}