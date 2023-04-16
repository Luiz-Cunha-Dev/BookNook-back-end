import prisma from "database/db";
import { faker } from '@faker-js/faker';


export async function createNewEntertainment(){
    const category = await prisma.categories.create({
        data:{
            name: faker.name.firstName()
        }
    })
    const type = await prisma.types.create({
        data:{
            name: faker.name.firstName()
        }
    })

    const result = await prisma.entertainments.create({
        data:{
            name: faker.name.firstName(),
            imageUrl: faker.image.imageUrl(),
            typeId: type.id,
            category1Id: category.id
        }
    })

    return {...result, type, category};
}