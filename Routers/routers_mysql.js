import { Router } from "express";
import {Leer_Base,Leer_Base_ID,Crear_Elemento,Actualizar_Elemento,Eliminar_Elemento} from "../Controladores/crud_mysql.js";

const router = Router();

// Rutas de usuario
router.get("/Leer",Leer_Base);

router.get("/Leer/:id",Leer_Base_ID);

router.post("/Crear_Elemento", Crear_Elemento);

router.post("/Actualizar_Elemento",Actualizar_Elemento);

router.post("/Eliminar_Elemento",Eliminar_Elemento);


export default router;