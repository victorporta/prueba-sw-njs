
import { Router, Response, Request } from "express";
const router = Router();
import {PeopleController} from "../controller/PeopleController";
/**
 * @swagger
 * /database/people:
 *   get:
 *     summary: Obtiene la lista de personajes
 *     responses:
 *       200:
 *         description: Lista de personajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.get(
    "/database/people",
    async (req: Request, res: Response) => {
        return PeopleController.getPeople(req, res) ;
        }
);
/**
 * @swagger
 * /database/people/save:
 *   get:
 *     summary: Guardar un personaje
 *     responses:
 *       200:
 *         description: Guardar un personaje
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Person'
 */
router.post(
    "/database/people/save",
    async (req: Request, res: Response) => {
        return PeopleController.postData(req, res) ;
    }
);
export default router;
