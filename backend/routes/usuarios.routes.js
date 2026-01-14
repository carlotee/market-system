import express from 'express';
import { db } from '../database/conexion_database.js';

const router = express.Router();

// REGISTRO
router.post('/registro', async (req, res) => {
  const { nombre, apellido, correo, password, telefono, direccion } = req.body;

  if (!nombre || !apellido || !correo || !password || !telefono || !direccion) {
    return res.status(400).json({ message: 'Faltan datos' });
  }

  try {
    const sql = `
      INSERT INTO usuarios (nombre, apellido, correo, password, telefono, direccion)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    await db.execute(sql, [
      nombre,
      apellido,
      correo,
      password,
      telefono
    ]);

    res.status(201).json({ message: 'Usuario registrado correctamente' });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

export default router;
