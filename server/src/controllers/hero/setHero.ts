import { Request, Response } from 'express';
import { HeroModel } from '../../model/heros/heroModel';

export function addHero(req: Request, res: Response){
    try {
        const hero = req.body;

        const _hero = new HeroModel(hero);
        _hero.validateSync();
        _hero.save();
        
        res.status(201).json({message:"Hero created successfully"});


    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal server error"});
    }
}