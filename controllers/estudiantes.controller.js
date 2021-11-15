
import { connection } from "../common/db.js";

const getAll = (req,res) => {
    connection.query('select * from estudiantes' , (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            res.status(200).send(rows);
          }
    })
}

const getOfertasFromEstudiantes = (req,res) => {
  connection.query(`select o.id, o.nombre, o.descripcion, o.salario, e.cif, e.nombre as nombre_empresa from ofertas o join empresas e on e.cif = o.empresa where id in (select oferta from suscripciones where estudiante = ${req.params.id})` , (err, rows) => {
    if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        const ofertas = []
        rows.map(oferta => {
          ofertas.push({
            id: oferta.id,
            nombre: oferta.nombre,
            descripcion: oferta.descripcion,
            salario: oferta.salario,
            empresa: {
              cif:oferta.cif,
              nombre: oferta.nombre_empresa
            }
          })
        })
        res.status(200).send(ofertas);
      }
})
}

export {getAll, getOfertasFromEstudiantes}