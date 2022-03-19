import { NextFunction, Request, Response } from "express";

class UserControler {
  static async getAll(req: Request, res: Response, next: NextFunction) {
    return res.json({message: 'user'});
  }
}

export default UserControler;
