import {pool} from "./Database/conection_mysql.js";

const getLanguages = async () => {

    try {
        
        const result = await pool.query("SELECT id, nombre FROM lenguaje;");
        console.log(result)

    } catch (error) {
        
    }

}

getLanguages();