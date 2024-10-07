import {SwapiService} from "../services/SwapiService";
import {Request, Response} from "express";
import {HttpResponses as Http} from "../server/server";

export class SwapiController {
    public static async getPeople(req: Request, res: Response, transformData : boolean= true){
        try {

            const data = SwapiService.getPeople(transformData);
            Http.getResponse200(res , data);
        } catch (error) {
            Http.getResponse500(res , error.message);
        }
    
    }
    public static async getStarships(req: Request, res: Response, transformData : boolean= true){
        try {

            const data = SwapiService.getStarships(transformData);
            Http.getResponse200(res , data);
        } catch (error) {
            Http.getResponse500(res , error.message);
        }
    }
    public static async getPlanets(req: Request, res: Response, transformData : boolean= true){
        try {
            const data = SwapiService.getPlanets(transformData);
            Http.getResponse200(res , data);
        } catch (error) {
            Http.getResponse500(res , error.message);
        }
    }
    public static async getVehicles(req: Request, res: Response, transformData : boolean= true){
        try {
            const data = SwapiService.getVehicles(transformData);
            Http.getResponse200(res , data);
        } catch (error) {
            Http.getResponse500(res , error.message);
        }
    }
    public static async getSpecies(req: Request, res: Response, transformData : boolean= true){
        try {
            const data = SwapiService.getSpecies(transformData);
            Http.getResponse200(res , data);
        } catch (error) {
            Http.getResponse500(res , error.message);
        }
    }
}