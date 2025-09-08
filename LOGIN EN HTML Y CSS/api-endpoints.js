// api-endpoints.js
const express = require('express');
const router = express.Router();
const realTimeManager = new RealTimeSystem();

// Obtener estado en tiempo real
router.get('/api/estado-actual', async (req, res) => {
    try {
        const estado = await realTimeManager.getCurrentStatus();
        res.json(estado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Registrar movimiento
router.post('/api/registrar-movimiento', async (req, res) => {
    try {
        const movimiento = await realTimeManager.recordMovement(req.body);
        io.emit('nuevo-movimiento', movimiento);
        res.json(movimiento);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Obtener historial
router.get('/api/historial/:usuarioId', async (req, res) => {
    try {
        const historial = await realTimeManager.getUserHistory(req.params.usuarioId);
        res.json(historial);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});