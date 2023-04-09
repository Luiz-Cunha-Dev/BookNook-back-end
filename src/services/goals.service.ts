import { goal } from "../protocols";
import goalsRepository from "../repository/goals.repository";

export async function putGoals(userId: number, goalId:number, goalData: goal) {

    const existingGoal = await goalsRepository.getGoalsByUserIdAndDate(userId, goalData.month, goalData.year);
    
    if(existingGoal.length === 0){
        throw { name: "NOT_FOUND", message: "The goal does not exist"};
    }

    await goalsRepository.updateGoal( goalId, goalData.quantity, goalData.goal, goalData.typeId, goalData.month, goalData.year);

    return;
}

export async function postGoals(userId: number, goalData: goal) {

    const existingGoal = await goalsRepository.getGoalsByUserIdAndDate(userId, goalData.month, goalData.year);
    
    if(existingGoal.length !== 0){
        throw { name: "CONFLICT", message: "There is already a goal for this data" };
    }

    await goalsRepository.createGoal(userId, goalData.quantity, goalData.goal, goalData.typeId, goalData.month, goalData.year);

    return;
}

export async function getGoals(userId: number) {

        const list = await goalsRepository.getGoalsByUserId(userId);

        return list;
}

const goalsService = {
    getGoals,
    postGoals,
    putGoals
}

export default goalsService;