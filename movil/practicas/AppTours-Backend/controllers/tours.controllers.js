const bd = require('../config/bd')

// obtener todos los tours
const getAllTours = async (req, res) => {
    try {
        const [tours] = await bd.query('SELECT * FROM Tours');
        res.json({
            success: true,
            data: tours
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error al obtener los tours',
            error: error.message
        });
    }
}

// obtener un tour por id
const getTourById = async (req, res) => {

    try {
        const { id } = req.params;
        const [tour] = await bd.query('SELECT * FROM Tours WHERE idTour = ?', [id]);

        if (tour.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Tour no encontrado'
            });
        }

        res.json({
            success: true,
            data: tour[0]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error al obtener el tour',
            error: error.message
        });
    }
};

// crear un nuevo tour
const createTour = async (req, res) => {
    try {
        const { nombre, descripcion, imagen, precio, categoria, estatus } = req.body;

        // validación de datos
        if (!nombre || !descripcion) {
            return res.status(400).json({
                success: false,
                message: 'Nombre y descripción son obligatorios'
            });
        }

        const [result] = await bd.query(
            'INSERT INTO Tours (nombre, descripcion, imagen, precio, categoria, estatus) VALUES (?, ?, ?, ?, ?, ?)',
            [nombre, descripcion, imagen, precio, categoria, estatus || '1']
        );

        res.status(201).json({
            success: true,
            message: 'Tour creado exitosamente',
            data: {
                idTour: result.insertId,
                nombre,
                descripcion,
                imagen,
                estatus: estatus || '1',
                categoria,
                precio
            }
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error al crear el tour',
            error: error.message
        });
    }
}

module.exports = {
    getAllTours,
    getTourById,
    createTour
}