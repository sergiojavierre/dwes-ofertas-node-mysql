import express from 'express';
const router = express.Router();

import * as ofertasController from "../controllers/ofertas.controller.js";

router.get('/', ofertasController.getAll);
router.get('/:id/estudiantes', ofertasController.getEstudiantesFromOferta);

export { router };
