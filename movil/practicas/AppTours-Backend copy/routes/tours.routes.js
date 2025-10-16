const express = require('express');
const router = express.Router();
const toursController = require('../controllers/tours')

/**
 * @swagger
 *  name: Tours
 *  description: API para la gestión de tours
 */

/**
 * @swagger
 * /api/tours
 *  get:
 *      summary: lista de tours
 *      tags: [Tours]
 *      responses:
 *          200:
 *              description: lista de tours
 */

router.get('/', toursController.getAllTours)
module.exports = router