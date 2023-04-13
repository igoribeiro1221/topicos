import { ProductService } from "./product.service";
import { Request, Response } from "express";

    class ProductController {

        async create(req:Request, res:Response) {
            const product = await new ProductService().create(req.body)

            return res.status(200).json(product)
        }

        async list(req:Request, res:Response) {
            const products = await new ProductService()

            return res.status(200).json(products)
        }

        async find(req:Request, res:Response) {
            const product = await new ProductService().find(req.params.id)

            return res.status(200).json(product)
        }

        async update(req:Request, res:Response) {
            const product = await new ProductService().update(req.params.id, req.body)

            return product
        }

        async delete(req:Request, res:Response) {
            await new ProductService().delete(req.params.id)

            return res.status(200).json("Successfully deleted product!")
        }
    } 
    
     export default new ProductController()