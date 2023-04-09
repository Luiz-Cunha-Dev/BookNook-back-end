import prisma from "../database/db";

async function getHighestRated() {
    const result = await prisma.entertainmentsUsers.groupBy({
        by: ["entertainmentId"],
        _avg: { grade: true },
        orderBy: {
            _avg: { grade: "desc" },
        },
        take: 10
    });

    return result;
}

async function getMostViewed() {
    const result = await prisma.entertainmentsUsers.groupBy({
        by: ["entertainmentId"],
        _count: { entertainmentId: true },
        orderBy: {
            _count: { entertainmentId: "desc" },
        },
        take: 10
    });

    return result;
}

const rankingRepository = {
    getHighestRated,
    getMostViewed
};

export default rankingRepository;
