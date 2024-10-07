
import { Router, Response, Request } from "express";
const router = Router();
import {SwapiController} from "../controller/SwapiController";
router.get(
    "/swapi/people",
    async (req: Request, res: Response) => {
        return SwapiController.getPeople(req, res) ;
        }
);
router.get(
    "/swapi/planets",
    async (req: Request, res: Response) => {
        return SwapiController.getPlanets(req, res) ;
        }
);
router.get(
    "/swapi/species",
    async (req: Request, res: Response) => {
        return SwapiController.getSpecies(req, res) ;
        }
);
router.get(
    "/swapi/starships",
    async (req: Request, res: Response) => {
        return SwapiController.getStarships(req, res) ;
        }
);
router.get(
    "/swapi/vehicles",
    async (req: Request, res: Response) => {
        return SwapiController.getVehicles(req, res) ;
        }
);
router.post(
    "/users",
    async (req: Request, res: Response) => {
        return "POST";
    }
);
export default router;
