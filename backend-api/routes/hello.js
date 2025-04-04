import { Router } from 'express';
import { getHello, postHello } from '../controllers/helloController.js';

const router = Router();

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Say Hello
 *     responses:
 *       200:
 *         description: Returns a greeting message
 *         content:
 *           application/json:
 *             example:
 *               message: Hello World!
 */
router.get('/hello', getHello);

/**
 * @swagger
 * /hello:
 *   post:
 *     summary: Say hello to a specific name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Alice
 *     responses:
 *       200:
 *         description: Personalized greeting
 *         content:
 *           application/json:
 *             example:
 *               message: Hello, Alice!
 */
router.post('/hello', postHello);

export default router;
