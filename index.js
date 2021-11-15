import express from 'express'
const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

import { router as estudiantesRouter } from "./routers/estudiantes.router.js";

app.use("/estudiantes", estudiantesRouter);

app.listen(8080, ()=>{
    console.log('Funciona')
})