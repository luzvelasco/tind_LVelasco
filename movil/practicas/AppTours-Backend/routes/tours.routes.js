const express = require('express');
const router = express.Router();
const toursController = require('../controllers/tours.controllers')

/**
 * @swagger
 * tags:
 *  name: Tours
 *  description: API para la gestión de tours
 */

/**
 * @swagger
 * /api/tours:
 *  get:
 *      summary: lista de tours
 *      tags: [Tours]
 *      responses:
 *          200:
 *              description: lista de tours
 */

router.get('/', toursController.getAllTours)

/**
 * @swagger
 * /api/tours/{id}:
 *  get:
 *      summary: obtener tour por ID
 *      tags: [Tours]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: integer
 *          required: true
 *          description: ID del tour
 *      responses:
 *        200:
 *          description: tour encontrado
 *        404:
 *         description: tour no encontrado
 */

router.get('/:id', toursController.getTourById)

// Crear tour

/**
* @swagger
* /api/tours:
*  post:
*    summary: Crear un nuevo tour
*    tags: [Tours]
*    requestBody:
*      required: true
*      content:
*        application/json:
*          schema:
*            type: object
*            required:
*              - nombre
*              - descripcion
*            properties:
*              nombre:
*                type: string
*              descripcion:
*                type: string
*              imagen:
*                type: string
*              precio:
*                type: number
*              categoria:
*                type: number
*              estatus:
*                type: number
*    responses:
*      201:
*        description: Tour creado exitosamente
*      400:
*        description: Datos inválidos
*/

router.post('/', toursController.createTour);

module.exports = router