import * as fs from 'fs';
import { Request, Response, NextFunction } from "express";

function getAdmins(): string[] {
    const adminsData = fs.readFileSync('data/admin.json', 'utf-8');
    const admins = JSON.parse(adminsData).admins;
    return admins;
}

export function hasAuthentication(req: Request, res: Response, next: NextFunction) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        res.status(401).send("Unauthorized: Authorization header missing.");
        return;
    }

    const username = authorization; // Assuming the username is directly sent in the Authorization header

    const admins = getAdmins();
    if (admins.includes(username)) {
        next();
    } else {
        res.status(403).send("Forbidden: You are not authorized to access this resource.");
    }
}
