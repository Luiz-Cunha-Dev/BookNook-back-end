import prisma from "database/db";
import { faker } from '@faker-js/faker';
import { server } from "../integration/authentication.test";


export async function cleanDb(){
    await prisma.sessions.deleteMany({});
    await prisma.entertainmentsUsers.deleteMany({});
    await prisma.goals.deleteMany({});
    await prisma.entertainments.deleteMany({});
    await prisma.categories.deleteMany({});
    await prisma.types.deleteMany({});
    await prisma.users.deleteMany({});
    return;
}

export async function getToken(){

    const user = await prisma.users.create({
        data:{
            username: faker.name.firstName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            pictureUrl: faker.image.imageUrl(),
            darkMode: false
        }
    })

    const session = await prisma.sessions.create({
        data:{
            userId: user.id,
            token: faker.internet.email()
        }
    })

    return {...session, user};
}

export async function getUser(){
    let email = faker.internet.email()
    let password = faker.internet.password()

    const response = await server.post(`/signup`).send({
        username: faker.name.firstName(),
        email,
        password
      });

    return {email, password};
}

