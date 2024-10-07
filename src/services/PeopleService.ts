
import { PeopleModel } from "@src/models/PeopleModel";
import {HttpResponses as Http} from "../server/server";

import {Request, Response} from "express";
import { People } from "@src/interfaces/SwapiInterface";
import { z } from "zod";

export class PeopleService {
    public static async getPeoples(req: Request, res: Response) {
        const data = await PeopleModel.getData({
            skip: 0,
            take : 10
        });
        Http.getResponse200(res,{
			data : data
		});
    }
    public static async saveData (req: Request, res: Response){
        const data :People = req.body;
        let result: People = null;
        try{
            const people = z.object({
                birth_year : z.string({
                    required_error : 'birth_year es obligatorio'
                }),
                eye_color : z.string({
                    required_error : 'eye_color es obligatorio'
                }),
                gender : z.string({
                    required_error : 'gender es obligatorio'
                }),
                hair_color : z.string({
                    required_error : 'hair_color es obligatorio'
                }),
                height : z.string({
                    required_error : 'height es obligatorio'
                }),
                homeworld : z.string({
                    required_error : 'homeworld es obligatorio'
                }),
                mass : z.string({
                    required_error : 'mass es obligatorio'
                }),
                name : z.string({
                    required_error : 'name es obligatorio'
                })
            });
            result = people.parse(req.body) as unknown as People;
            let insertData= await PeopleModel.create({
                data: result
            })
            let inserted_id = insertData.id;
            Http.getResponse200(res,{
                data : inserted_id
            });
        }catch(e){
            Http.getResponse400(res,{
				error: JSON.parse(e.message)
			});
			throw new Error(e.message);
        }
        
    
    }
}