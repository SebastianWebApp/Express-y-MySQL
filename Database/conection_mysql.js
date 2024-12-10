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

    // Para crear la base de datos con su tabla
    initializeDatabase();


  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);

    // Agregar un retraso de 10 segundos antes de intentar una acción adicional
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    console.log("Reintentando conectar a la base de datos...");
    // Aquí podrías intentar llamar a `testConnection` nuevamente o manejar la lógica de reintento
    await testConnection();

  }
}

testConnection();