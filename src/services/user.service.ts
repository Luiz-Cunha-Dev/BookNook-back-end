import userRepository from "../repository/user.repository";
import { user } from "../protocols";

export async function putUser(userId: number, userData: user) {

    const existingUser = await userRepository.getUserById(userId)

    if(!existingUser){
        throw { name: "NOT_FOUND", message: "The goal does not exist"};
    }

    await userRepository.updateUser(userId, userData.username, userData.email, userData.pictureUrl)

    return;
}

export async function putDarkMode(userId: number) {

    const existingUser = await userRepository.getUserById(userId)

    if(!existingUser){
        throw { name: "NOT_FOUND", message: "The goal does not exist"};
    }

    await userRepository.updateDarkMode(userId, !existingUser.darkMode)

    return;
}

const userService = {
    putUser,
    putDarkMode
}

export default userService;