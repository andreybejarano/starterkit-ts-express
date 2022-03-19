import { NextFunction, Request, Response } from "express";

import userModel from './model';

class UserControler {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userModel.findAll();
      return res.json(users);
    } catch (error) {
      return next(error)
    }
  }

  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      await userModel.create({ name, email, password });
      return res.status(201).json({ status: 201, message: 'User created' });
    } catch (error) {
      return next(error);
    }
  }
}

export default UserControler;
