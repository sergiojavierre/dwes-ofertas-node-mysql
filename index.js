import express from 'express'
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

import { router as estudiantesRouter } from "./routers/estudiantes.router.js";
import { router as ofertasRouter } from "./routers/ofertas.router.js";

app.use("/estudiantes", estudiantesRouter);
app.use("/ofertas", ofertasRouter)

app.listen(8080, ()=>{
    console.log('Funciona')
})