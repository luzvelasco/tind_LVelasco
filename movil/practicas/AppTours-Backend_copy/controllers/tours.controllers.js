const bd = require('../config/bd')

// obtener todos los tours
const getAllTours = async (req, res) => {
    try {
        const [tours] = await bd.query('SELECT * FROM Tours');
        res.json ({
            success: true,
            data: tours
        });
    } catch (error) {
        res.status(500).json ({
            success: false,
            message: 'error al obtener los tours',
            error: error.message
        });
    }
}

module.exports = {
    getAllTours
}