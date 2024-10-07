import { Router } from "express";
import swapi from "./swapi";
import people from "./people";

const router = Router();
router.use(swapi);
router.use(people);

export default router;