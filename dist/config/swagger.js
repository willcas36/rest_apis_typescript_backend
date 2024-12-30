"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerUIOptions = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    swaggerDefinition: {
        openapi: "3.0.0",
        tags: [
            {
                name: "products",
                description: "Api operations related to products",
            },
        ],
        info: {
            title: "REST API Node.js / Express / TypeScripts",
            version: "1.0.0",
            description: "API Docs for Products",
        },
    },
    apis: ["./src/router.ts"],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
const swaggerUIOptions = {
    customCss: `
   .topbar-wrapper .link {
   content: url('https://frontends.udemycdn.com/frontends-homepage/staticx/udemy/images/v7/logo-udemy.svg');
   height: 80px;
   width: auto
   }
   .swagger-ui .topbar{
   background-color: #2b3b45;
   }
   `,
    customSiteTitle: "Documentación REST API Express / TypeScript",
};
exports.swaggerUIOptions = swaggerUIOptions;
exports.default = swaggerSpec;
//# sourceMappingURL=swagger.js.map