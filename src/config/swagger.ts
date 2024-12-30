import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options: swaggerJSDoc.Options = {
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
const swaggerSpec = swaggerJSDoc(options);
const swaggerUIOptions: SwaggerUiOptions = {
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
export default swaggerSpec;
export { swaggerUIOptions };
