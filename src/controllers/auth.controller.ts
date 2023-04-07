import { Request, Response } from "express";
import authService from "../services/auth.service";
import httpStatus, { OK } from "http-status";
import { Signin, Signup } from "protocols";
  
  export async function signup(req: Request, res:Response) {
    const { username, email, password } = req.body as Signup;  
  
    try {

      await authService.signup({ username, email, password });
  
      res.sendStatus(httpStatus.CREATED);
    } catch (err) {
      console.error(err);
      if(err.name === "FORBIDDEN"){
        return res.sendStatus(httpStatus.FORBIDDEN);
      }
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  export async function signin(req: Request, res:Response) {
    const { email, password } = req.body as Signin;
  
    try {

      const userData = await authService.signin({email, password});
  
      res.send(userData).status(httpStatus.OK);

    } catch (err) {
      console.error(err);
      if(err.name === "NOT_FOUND"){
        return res.sendStatus(httpStatus.NOT_FOUND)
      }
      if(err.name === "FORBIDDEN"){
        return res.sendStatus(httpStatus.FORBIDDEN)
      }
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  
  export async function logout(req: Request, res:Response) {
    const { authorization } = req.headers;
  
    try {
      
      await authService.logout(authorization);
  
      res.sendStatus(httpStatus.OK);

    } catch (err) {
      console.error(err);
      if(err.name === "UNAUTHORIZED"){
        return res.sendStatus(httpStatus.UNAUTHORIZED)
      }
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }