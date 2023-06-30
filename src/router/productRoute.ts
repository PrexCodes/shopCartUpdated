import { Router } from "express"
import { createProduct } from "../controller/productController"

const router = Router()

router.route('/create').post(createProduct)

export default router