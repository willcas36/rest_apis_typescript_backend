import express from "express";
import colors from "colors";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";
import router from "./router";
import db from "./config/db";
import swaggerUI, { SwaggerUiOptions } from "swagger-ui-express";
import swaggerSpec, { swaggerUIOptions } from "./config/swagger";

// Conectar a base de datos
export async function connectDB() {
   try {
      await db.authenticate();
      db.sync();
      console.log( colors.blue( 'Conexión exitosa a la BD'))
   } catch (error) {
      // console.log(error)
      console.log(colors.red.bold("Hubo un error al conectar a la BD"));
   }
}
connectDB();

// Instancia de express
const server = express();

// Permitir conecciones
const corsOptions: CorsOptions = {
   origin: function (origin, callback) {
      if (origin === process.env.FRONTEND_URL|| !origin) {
         callback(null, true);
      } else {
         callback(new Error("Error de CORS"));
      }
   },
};
server.use(cors(corsOptions));

// Leer datos de formularios
server.use(express.json());

server.use(morgan("dev"));
// Morgan te permite obtener información sobre el cliente que esta solicitando una petición

server.use("/api/products", router);

server.use(
   "/docs",
   swaggerUI.serve,
   swaggerUI.setup(swaggerSpec, swaggerUIOptions)
);

export default server;
