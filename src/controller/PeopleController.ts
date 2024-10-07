import {PeopleService} from "../services/PeopleService";
import {Request, Response} from "express";
export class PeopleController {
    public static async getPeople(req: Request, res: Response, transformData : boolean= true){
        return PeopleService.getPeoples(req,res);
    }
    public static async postData(req: Request, res: Response, transformData : boolean= true){
        return PeopleService.saveData(req,res);
    }
}