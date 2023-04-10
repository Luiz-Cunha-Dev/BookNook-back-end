import { goal } from "../protocols";
import goalsRepository from "../repository/goals.repository";

export async function putGoals(goalId:number, goalData: goal) {

    await goalsRepository.updateGoal( goalId, goalData.quantity, goalData.goal, goalData.typeId, goalData.month, goalData.year);

    return;
}

export async function postGoals(userId: number, goalData: goal) {

    const existingGoal = await goalsRepository.getGoalsByUserIdAndDate(userId, goalData.month, goalData.year, goalData.typeId);
    
    if(existingGoal.length !== 0){
        putGoals(existingGoal[0].id, goalData)
        return
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