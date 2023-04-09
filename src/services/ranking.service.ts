import rankingRepository from "../repository/ranking.repository";

export async function getGeneralRanking() {

        const highestRated = await rankingRepository.getHighestRated();

        const mostViewed = await rankingRepository.getMostViewed();

        return {highestRated, mostViewed};
}

const rankingService = {
    getGeneralRanking
}

export default rankingService;