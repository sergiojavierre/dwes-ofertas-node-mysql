import { connection } from "../common/db.js";

const getAll = (req,res) => {
    connection.query('select * from ofertas' , (err, rows) => {
        if (err) {
            console.log(err);
            res.status(500).send(err);
          } else {
            res.status(200).send(rows);
          }
    })
}

const getEstudiantesFromOferta = (req,res) => {
  connection.query(`select e.id, e.nombre, e.ciclo from estudiantes e where id in (select estudiante from suscripciones where oferta = ${req.params.id})` , (err, rows) => {
    if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        const estudiantes = []
        rows.map(estudiante => {
          estudiantes.push({
            id: estudiante.id,
            nombre: estudiante.nombre,
            ciclo: estudiante.ciclo
          })
        })
        res.status(200).send(estudiantes);
      }
})
}

export { getAll, getEstudiantesFromOferta }