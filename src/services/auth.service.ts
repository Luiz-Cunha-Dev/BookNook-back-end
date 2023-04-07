import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { Signin, Signup } from "../protocols";
import authRepository from "../repository/auth.repository";

export async function signup(userData: Signup) {

  const registeredUser = await authRepository.getUserByEmail(userData.email);

  if (registeredUser) {
    throw { name: "FORBIDDEN", message: "Existing email" }
  }

  const encryptedPassword = bcrypt.hashSync(userData.password, 10);

  const createUser = await authRepository.createNewUser(userData.username, userData.email, encryptedPassword);

  return createUser;
}

export async function signin(userData: Signin) {

    const user = await authRepository.getUserByEmail(userData.email);

    if (!user) {
      throw { name: "NOT_FOUND", message: "Email does not exist" };
    }

    if (!bcrypt.compareSync(userData.password, user.password)) {
      throw { name: "FORBIDDEN", message: "Incorrect password" };
    }

    delete user.password

    const session = await authRepository.getSessionById(user.id);

    if (session) {
      return {...user, token: session.token};
    }

    const token = uuid();

    const createSession = await authRepository.createNewSession(user.id, token);

    return {... user, token: createSession.token};
}

export async function logout(authorization: string) {

  if (!authorization) {
    throw { name: "UNAUTHORIZED", message: "Unauthorized" };
  }

  const token = authorization.replace("Bearer ", "");

    const session = await authRepository.getSessionByToken(token);

    if (!session) {
      throw { name: "UNAUTHORIZED", message: "Unauthorized" };
    }

    const deleteSession = await authRepository.deleteSessionById(session.userId);

    return deleteSession;
}

const authService = {
  signup,
  signin,
  logout
}

export default authService;