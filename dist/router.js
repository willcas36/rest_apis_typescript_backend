"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const product_1 = require("./handlers/product");
const middleware_1 = require("./middleware");
const router = (0, express_1.Router)();
/**
 * @swagger
 * components:
 *      schemas:
 *          Product:
 *              type: object
 *              properties:
 *                  id:
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name:
 *                      type: string
 *                      description: The Product name
 *                      example: Monitor Curvo de 49 pulgadas
 *                  price:
 *                      type: number
 *                      description: The Product price
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description: The Product availability
 *                      example: True
 */
/**
 * @swagger
 * /api/products:
 *    get:
 *       summary: Get a list of products
 *       tags:
 *          - Products
 *       description: Return a list of products
 *       responses:
 *             200:
 *                description: Succesful response
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: array
 *                         items:
 *                            $ref: '#/components/schemas/Product'
 */
// Routing
router.get("/", product_1.getProducts);
/**
 * @swagger
 * /api/products/{id}:
 *    get:
 *       summary: Get a product by ID
 *       tags:
 *          - Products
 *       description: Return a product based on its unique ID
 *       parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *             type: integer
 *       responses:
 *          200:
 *             description: Successful Response
 *             content:
 *                application/json:
 *                   schema:
 *                      $ref: '#/components/schemas/Product'
 *          400:
 *             description: Not found
 *          404:
 *             description: Bad Request - Invalid ID
 *
 *
 *
 */
router.get("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID no válido"), middleware_1.handleInputErrors, product_1.getProductById);
/**
 * @swagger
 * /api/products:
 *    post:
 *       summary: Creates a new product
 *       tags:
 *          - Products
 *       description: Creates a new record in the database
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                         type: string
 *                         example: "Monitor curvo 49 pulgadas"
 *                      price:
 *                         type: number
 *                         example: 399
 *       responses:
 *          201:
 *                description: Succesful response
 *                content:
 *                   application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product'
 *          400:
 *             description: Bad Request - Invalid input data
 */
router.post("/", 
// Validación
(0, express_validator_1.body)("name")
    .notEmpty()
    .withMessage("El nombre de Producto no puede ir vacio"), (0, express_validator_1.body)("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio de Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"), middleware_1.handleInputErrors, product_1.createProduct);
/**
 * @swagger
 * /api/products/{id}:
 *    put:
 *       summary: Updates a product with user input
 *       tags:
 *          - Products
 *       description: Returns the updates product
 *       parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *             type: integer
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                      name:
 *                         type: string
 *                         example: "Monitor curvo 49 pulgadas"
 *                      price:
 *                         type: number
 *                         example: 399
 *                      availability:
 *                         type: boolean
 *                         example: true
 *       responses:
 *             200:
 *                description: Succesful response
 *                content:
 *                   application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product'
 *             400:
 *                description: Bad Request - Invalid ID or Invalid input Data
 *             404:
 *                description: Product Not Found
 *
 *
 *
 *
 *
 */
router.put("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID no válido"), (0, express_validator_1.body)("name")
    .notEmpty()
    .withMessage("El nombre de Producto no puede ir vacio"), (0, express_validator_1.body)("price")
    .isNumeric()
    .withMessage("Valor no válido")
    .notEmpty()
    .withMessage("El precio de Producto no puede ir vacio")
    .custom((value) => value > 0)
    .withMessage("Precio no válido"), (0, express_validator_1.body)("availability")
    .isBoolean()
    .withMessage("Valor para disponibilidad no válido"), middleware_1.handleInputErrors, product_1.updateProduct);
/**
 * @swagger
 * /api/products/{id}:
 *    patch:
 *       summary: Update Product availability
 *       tags:
 *          - Products
 *       description: Returns the updated availability
 *       parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to retrieve
 *          required: true
 *          schema:
 *             type: integer
 *       responses:
 *             200:
 *                description: Succesful response
 *                content:
 *                   application/json:
 *                      schema:
 *                         $ref: '#/components/schemas/Product'
 *             400:
 *                description: Bad Request - Invalid ID
 *             404:
 *                description: Product Not Found
 *
 *
 */
router.patch("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID no válido"), middleware_1.handleInputErrors, product_1.updateAvailability);
/**
 * @swagger
 * /api/products/{id}:
 *    delete:
 *       summary: Deletes a product by a given ID
 *       tags:
 *          - Products
 *       description: Returns a confirmation message
 *       parameters:
 *        - in: path
 *          name: id
 *          description: The ID of the product to delete
 *          required: true
 *          schema:
 *             type: integer
 *       responses:
 *             200:
 *                description: Succesful response
 *                content:
 *                   application/json:
 *                      schema:
 *                         type: string
 *                         value: 'Producto eliminado'
 *             400:
 *                description: Bad Request - Invalid ID
 *             404:
 *                description: Product Not Found
 *
 *
 */
router.delete("/:id", (0, express_validator_1.param)("id").isInt().withMessage("ID no válido"), middleware_1.handleInputErrors, product_1.deleteProduct);
exports.default = router;
//# sourceMappingURL=router.js.map