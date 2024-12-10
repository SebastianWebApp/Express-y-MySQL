import { connectToDB } from "../Database/conection_mysql.js";

// Crear base de datos
const createDatabase = async () => {
    try {
        // Creamos la tabla node_sql
        await connectToDB.query("CREATE DATABASE IF NOT EXISTS node_sql;");
        console.log("Base de datos 'node_sql' creada (si no existía).");
    } catch (error) {
        console.error("Error al crear la base de datos:", error.message);
    }
};

// Crear la tabla 'lenguaje'
const createTable = async () => {
    try {
        // Cambiar a la base de datos 'node_sql' después de crearla
        await connectToDB.query("USE node_sql;");
        
        // Crear la tabla
        await connectToDB.query(`
            CREATE TABLE IF NOT EXISTS lenguaje (
                id INT AUTO_INCREMENT PRIMARY KEY,
                nombre VARCHAR(100) NOT NULL
            );
        `);
        console.log("Tabla 'lenguaje' creada (si no existía).");
    } catch (error) {
        console.error("Error al crear la tabla:", error.message);
    }
};

// Función para ejecutar ambos pasos
export const initializeDatabase = async () => {
    await createDatabase();
    await createTable();
};


