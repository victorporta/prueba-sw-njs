import { Server } from "./server/server";
import appRouter from "./routes/index";
import { setupSwagger } from '../swagger/swagger';

const session = require("express-session");
const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");

const serverApp = Server.init();
const whitelist = ['http://localhost:3000'];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
    optionsSuccessStatus: 200
};

serverApp.app.use(cors(corsOptions));
serverApp.app.disable('x-powered-by');
serverApp.app.use(express.json({ limit: "50mb" }));
serverApp.app.use(express.urlencoded({ limit: "50mb", extended: true }));

serverApp.app.use((req, res, next) => {
    res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
    next();
});

setupSwagger(serverApp.app);

serverApp.app.use(appRouter);

module.exports.handler = serverless(serverApp.app);