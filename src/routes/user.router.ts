import { IUserDTO } from "@models/user.model";
import express from "express"
import { validatorHandler } from "../middlewares/validator.handler";
import { createUserORM, getUserORM, updateUserORM } from "../orm/user.orm";
import { UserService } from "../services/user.service";

const router = express.Router();
const userSvc = new UserService()

router.get('/', async (req, res) => {
  const response = await userSvc.find()
  res.status(200).json(response)
  
});

router.get('/:id',
  validatorHandler(getUserORM, "params"),
  async (req, res, next) => {
  const { id } = req.params;
  try {
    const entity = await userSvc.findOne(Number(id));
    res.status(200).json(entity);
  } catch(err) {
    next(err)
  }
  
});

router.post('/', 
  validatorHandler(createUserORM, "body"),
  async (req, res) => {
    const body = req.body as IUserDTO;
    console.log('body: ', body);
    const newEntity = await userSvc.create(body);
    res.status(201).json(newEntity);
  }
);

router.patch('/:id',
  validatorHandler(getUserORM, "params"),
  validatorHandler(updateUserORM, "body"),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body as IUserDTO;
      const entity = await userSvc.update(Number(id), body);
      res.json(entity);
    } catch (error: any) {
      res.status(404).json({
        message: error.message
      });
    }
});

router.delete('/:id', async (req, res, next) => {
  
  try {
    const { id } = req.params;
    await userSvc.delete(Number(id))
    res.status(200).json({ message: "ok" });
  } catch (error) {
    next(error);
  }

});

export default router