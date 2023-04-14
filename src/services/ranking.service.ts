import rankingRepository from "../repository/ranking.repository";

export async function getGeneralRanking() {

        const highestRated = await rankingRepository.getHighestRated();

        const mostViewed = await rankingRepository.getMostViewed();

        let highestRatedList = [];
        let mostViewedList = [];

        for (let i = 0; i < highestRated.length; i++) {
            const entertainment = await rankingRepository.getEntertainmentById(highestRated[i].entertainmentId);
            highestRatedList.push(entertainment);
        }

        for (let i = 0; i < mostViewed.length; i++) {
            const entertainment = await rankingRepository.getEntertainmentById(mostViewed[i].entertainmentId);
            mostViewedList.push(entertainment);
        }

        return {highestRated: highestRatedList, mostViewed: mostViewedList};
}

const rankingService = {
    getGeneralRanking
}

export default rankingService;