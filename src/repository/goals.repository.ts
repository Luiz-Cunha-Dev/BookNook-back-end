import prisma from "../database/db";

export async function getGoalsByUserId(userId: number) {
    const result = await prisma.goals.findMany({
        where:{userId},
        include:{types:{select: {name: true}}}
    })
    return result;
}

export async function getGoalsByUserIdAndDate(userId: number, month: number, year: number, typeId: number) {
    const result = await prisma.goals.findMany({
        where:{userId, month, year, typeId}
    })
    return result;
}

export async function createGoal(userId: number,quantity: number, goal: number, typeId: number, month: number, year: number) {
    const result = await prisma.goals.create({
        data:{userId, quantity, goal, typeId, month, year}
    })
    return result;
}

export async function updateGoal(id: number, quantity: number, goal: number, typeId: number, month: number, year: number) {
    const result = await prisma.goals.update({
        where:{id},
        data:{quantity, goal, typeId, month, year}
    })
    return result;
}

const goalsRepository = {
    getGoalsByUserId,
    getGoalsByUserIdAndDate,
    createGoal,
    updateGoal
}

export default goalsRepository;