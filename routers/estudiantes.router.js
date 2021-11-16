import express from 'express';
const router = express.Router();

import * as estudiantesController from "../controllers/estudiantes.controller.js";

router.get('/', estudiantesController.getAll);
router.get('/:id/ofertas', estudiantesController.getOfertasFromEstudiante);

export { router };
