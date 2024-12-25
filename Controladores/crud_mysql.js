import {connectToDB} from "../Database/conection_mysql.js";

export const Leer_Base = async (req, res) => {
    try {
        // Colocamos la sentencia SQL para mandar a llamar lo que necesitamos
        const [rows] = await connectToDB.query("SELECT id, nombre FROM lenguaje;");
        console.table(rows);  // Muestra todos los registros

        // Enviar los datos al cliente como respuesta JSON
        return res.status(200).json(rows);  // Respondemos con los datos en formato JSON
    } catch (error) {
        console.error("Error al obtener los datos:", error.message);
        return res.status(500).json({ error: "Error al obtener los datos" });  // Respondemos con un error
    }
};


export const Leer_Base_ID = async (req, res) =>{

    const id = req.params.id;

    try {
        const [rows] = await connectToDB.query("SELECT id, nombre FROM lenguaje WHERE id = ?", [id]);
        if (rows.length > 0) {
            console.log(rows[0]);  // Muestra el registro con el ID especificado
            return rows[0];
        } else {
            console.log("Lenguaje no encontrado.");
            return null;
        }
    } catch (error) {
        console.error("Error al obtener el lenguaje:", error.message);
    }

}

export const Crear_Elemento = async (req, res) =>{

    const Parametros = req.body;

    try {
        const [result] = await connectToDB.query("INSERT INTO lenguaje (nombre) VALUES (?)", [Parametros.nombre]);
        console.log(`Nuevo lenguaje creado con ID: ${result.insertId}`);
        return result.insertId;
    } catch (error) {
        console.error("Error al crear el lenguaje:", error.message);
    }
}

export const Actualizar_Elemento = async (req, res) =>{

    const Parametros = req.body;

    try {
        const [result] = await connectToDB.query("UPDATE lenguaje SET nombre = ? WHERE id = ?", [Parametros.nombre, Parametros.id]);
        if (result.affectedRows > 0) {
            console.log(`Lenguaje con ID ${Parametros.id} actualizado.`);

            res.status(200).json({ 
                Estado: true        
             });


        } else {
            console.log("No se encontró el lenguaje para actualizar.");
            res.status(400).json({ 
                Estado: false        
             });
        }
    } catch (error) {
        console.error("Error al actualizar el lenguaje:", error.message);
        res.status(400).json({ 
            Estado: false        
         });
    }
}


export const Eliminar_Elemento = async (req, res) =>{

    const Parametros = req.body;

    try {
        const [result] = await connectToDB.query("DELETE FROM lenguaje WHERE id = ?", [Parametros.id]);
        if (result.affectedRows > 0) {
            console.log(`Lenguaje con ID ${Parametros.id} eliminado.`);
        } else {
            console.log("No se encontró el lenguaje para eliminar.");
        }
    } catch (error) {
        console.error("Error al eliminar el lenguaje:", error.message);
    }

}

