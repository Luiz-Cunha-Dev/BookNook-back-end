import prisma from "../database/db";

async function getEntertainmentsByUserId(userId: number) {
    const result = await prisma.entertainmentsUsers.findMany({
        where: { userId },
        include: {
            entertainments: { include: { types: { select: { name: true } } } },
        },
    });
    return result;
}

async function getAllEntertainments() {
    const result = await prisma.entertainments.findMany({
        include: { types: { select: { name: true } } },
    });
    return result;
}

async function createNewEntertainment(
    name: string,
    imageUrl: string,
    typeId: number,
    category1Id?: number,
    category2Id?: number,
    category3Id?: number
) {
    const result = await prisma.entertainments.create({
        data: { name, imageUrl, typeId, category1Id, category2Id, category3Id },
    });
    return result;
}

async function addNewEntertainment(
    userId: number,
    entertainmentId: number,
    grade?: number,
    comment?: string
) {
    const result = await prisma.entertainmentsUsers.create({
        data: { userId, entertainmentId, grade, comment },
    });
    return result;
}

async function getEntertainmentsByEntertainmentId(entertainmentId: number) {
    const result = await prisma.entertainmentsUsers.findMany({
        where: { entertainmentId },
    });
    return result;
}

async function getEntertainmentsById(id: number) {
    const result = await prisma.entertainments.findUnique({
        where: { id },
    });
    return result;
}

async function updateEntertainmentsById(
    id: number,
    name: string,
    imageUrl: string,
    typeId: number,
    category1Id?: number,
    category2Id?: number,
    category3Id?: number
) {
    const result = await prisma.entertainments.update({
        where: { id },
        data: { name, imageUrl, typeId, category1Id, category2Id, category3Id },
    });
    return result;
}

async function updateUserEntertainmentById(
    id: number,
    entertainmentId: number,
    grade?: number,
    comment?: string
) {
    const result = await prisma.entertainmentsUsers.update({
        where: { id },
        data: { entertainmentId, grade, comment },
    });
    return result;
}

async function getUserEntertainmentId(id: number) {
    const result = await prisma.entertainmentsUsers.findUnique({
        where: { id },
    });
    return result;
}

async function deleteUserEntertainmentById(id: number) {
    const result = await prisma.entertainmentsUsers.delete({
        where: { id },
    });
    return result;
}

async function deleteEntertainmentById(id: number) {
    const result = await prisma.entertainments.delete({
        where: { id },
    });
    return result;
}

async function getCategories() {
    const result = await prisma.categories.findMany({
        orderBy:{id: "asc"}
    });
    return result;
}

const entertainmentRepository = {
    getEntertainmentsByUserId,
    getAllEntertainments,
    createNewEntertainment,
    addNewEntertainment,
    getEntertainmentsByEntertainmentId,
    updateEntertainmentsById,
    updateUserEntertainmentById,
    getUserEntertainmentId,
    getEntertainmentsById,
    deleteUserEntertainmentById,
    deleteEntertainmentById,
    getCategories
};

export default entertainmentRepository;
