import express, {json} from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./Routers/routers_mysql.js"


dotenv.config();

const PORT = 3000;

const app = express();

//Middlewares
app.use(cors());

app.use((err,req,res,next) => {

    res.status(500).json({
        Estado: false,
        Respuesta: "Error interno del servidor"
    })

});

app.use(json());


// Rutas
app.use("/api/mysql",router);



app.use((req, res) => {
    res.status(404).json({ 
        Estado: false,
        Respuesta: "Recurso no encontrado"

     });
});



app.listen(PORT, () =>{

    console.log(`Servidor Activo http://localhost:${PORT}`);

})
