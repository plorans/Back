import express from "express";

const router = express.Router();

import {getUsuario,saveUsuario,updateUsuario,borrarUsuario,listUsuario} from '../controllers/usuarioController.js';

router.get('/listaUsuario',listUsuario);
router.get('/:id',getUsuario);
router.put('/update/:id',updateUsuario);
router.post('/save',saveUsuario);
router.delete('/:id',borrarUsuario);

export default router;