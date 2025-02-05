import { error } from "console";
import {HeroModel } from "../../model/heros/heroModel";
import { Request, Response } from "express";

export async function getHeros(req: Request, res: Response) {
    try {
        const heros = await HeroModel.find();
        if (heros) {
            res.status(200).json({heros});
        } else {
            res.status(404).json({ message: "No heros found", error:"Not found" });
    }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}