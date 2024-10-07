import axios from "axios";
import {Request, Response} from "express";
import { Swapi } from "@src/endpoints/Swapi";
import {HttpResponses as Http} from "../server/server";
import {transformToSpanish} from "../util/SwapiMapping";
const swapi =new Swapi();

export class SwapiService {
    public static async getPeople( transformData : boolean){
        const response = await axios.get(swapi.clear().people().buildUrl());   
        response.data.results =transformData?transformToSpanish(response.data.results):response.data.results;
       return response;
    }
    public static async getPlanets( transformData : boolean){
        const response = await axios.get(swapi.clear().planets().buildUrl());
        response.data.results =transformData?transformToSpanish(response.data.results):response.data.results;
        return response;

    }
    public static async getVehicles( transformData : boolean){
        const response = await axios.get(swapi.clear().vehicles().buildUrl());
        response.data.results =transformData?transformToSpanish(response.data.results):response.data.results;
        return response;

    }
    public static async getSpecies(transformData : boolean){
        const response = await axios.get(swapi.clear().species().buildUrl());
        response.data.results =transformData?transformToSpanish(response.data.results):response.data.results;
        return response;

    }
    public static async getStarships( transformData : boolean){
        const response = await axios.get(swapi.clear().species().buildUrl());
        response.data.results =transformData?transformToSpanish(response.data.results):response.data.results;
        return response;

    }
}