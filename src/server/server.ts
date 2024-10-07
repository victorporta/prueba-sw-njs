import express       = require('express');
import { Response } from "express";

export class Server {
    public app: express.Application;
    constructor() {
        this.app    = express();
    }
    static init() {
        return new Server();
    }
}
export class HttpResponses {
    static getResponseRecords(res: Response, data: any = [], total: number = 1) {
        res.status(200).json({
            success : true,
            records	: data,
            total	: total
        });
    }
    static getResponse200(res: Response, data: any = [], msg: string = "Consulta realizada correctamente", success = true) {
        data['success'] = success;
        data['message'] = msg;
        res.status(200).json(data);
    }
    static getResponse201(res: Response, msg: string = 'Creado con exito.', data = []) {
        res.status(201).json({
            success : true,
            message	: msg,
            records	: data
        });
    }


    static getResponse400(res: Response, data: any = []) {
        data['success'] = false;
        res.status(400).json(data);
    }

    static getResponse401(res: Response, msg: string) {
        res.status(401).json({
            success : false,
            message	: msg
        });
    }

    static getResponse403(res: Response, data: any = []) {
        data['success'] = false;
        res.status(403).json(data);
    }

    static getResponse404(res: Response, data: any = []) {
        data['success'] = false;
        res.status(404).json(data);
    }


    static getResponse409(res: Response, msg: string) {
        res.status(409).json({
            success : false,
            message	: msg
        });
    }

    static getResponse422(res: Response, msg: string) {
        res.status(422).json({
            success : false,
            message	: msg
        });
    }
    static getResponse500(res: Response, data: any = {}) {
        data['success'] = false;
        res.status(500).json(data);
    }
}
