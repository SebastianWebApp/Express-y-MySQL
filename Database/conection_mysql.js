import { createPool } from "mysql2/promise";
import {initializeDatabase} from "../Modulos/estructura_mysql.js"

export const connectToDB = createPool({
  // host: "localhost",
  host: "mysql",        // Nombre del servicio MySQL en Docker Compose
  port: 3306,
  user: "root",
  password: "root"
});

async function testConnection() {
  try {
    const connection = await connectToDB.getConnection();
    console.log("Conexión exitosa a la base de datos!");
    connection.release(); // Liberar la conexión después de usarla
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
  }
}

testConnection();

initializeDatabase();
