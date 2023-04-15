import { Entertainment } from "protocols";
import entertainmentRepository from "../repository/entertainments.repository";

async function getCategories() {
    const list = await entertainmentRepository.getCategories();

    return list;
}

export async function deleteEntertainment(
    userId: number, 
    entertainmentsUsersId: number
) {
    const entertainment = await entertainmentRepository.getUserEntertainmentId(
        entertainmentsUsersId
    );


    if (entertainment.userId !== userId) {
        throw { name: "FORBIDDEN" };
    }

    const viewsEntertainment =
        await entertainmentRepository.getEntertainmentsByEntertainmentId(
            entertainment.entertainmentId
        );

    if (viewsEntertainment.length === 1) {

        await entertainmentRepository.deleteUserEntertainmentById(entertainmentsUsersId);

        await entertainmentRepository.deleteEntertainmentById(entertainment.entertainmentId)

    } else {

        await entertainmentRepository.deleteUserEntertainmentById(entertainmentsUsersId);

    }

    return;
}

export async function putEntertainment(
    userId: number,
    entertainmentsUsersId: number,
    entertainmentData: Entertainment
) {
    if (entertainmentData.category1Id === undefined) {
        entertainmentData.category1Id = null;
    }
    if (entertainmentData.category2Id === undefined) {
        entertainmentData.category2Id = null;
    }
    if (entertainmentData.category3Id === undefined) {
        entertainmentData.category3Id = null;
    }

    const entertainment = await entertainmentRepository.getUserEntertainmentId(
        entertainmentsUsersId
    );

    const entertainmentSelected =
        await entertainmentRepository.getEntertainmentsById(
            entertainment.entertainmentId
        );

    if (entertainment.userId !== userId) {
        throw { name: "FORBIDDEN" };
    }

    const viewsEntertainment =
        await entertainmentRepository.getEntertainmentsByEntertainmentId(
            entertainment.entertainmentId
        );

    if (
        viewsEntertainment.length === 1 ||
        (entertainmentData.name === entertainmentSelected.name &&
            entertainmentData.imageUrl === entertainmentSelected.imageUrl &&
            entertainmentData.typeId === entertainmentSelected.typeId &&
            entertainmentData.category1Id === entertainmentSelected.category1Id &&
            entertainmentData.category2Id === entertainmentSelected.category2Id &&
            entertainmentData.category3Id === entertainmentSelected.category3Id)
    ) {
        await entertainmentRepository.updateEntertainmentsById(
            entertainment.entertainmentId,
            entertainmentData.name,
            entertainmentData.imageUrl,
            entertainmentData.typeId,
            entertainmentData.category1Id,
            entertainmentData.category2Id,
            entertainmentData.category3Id
        );

        await entertainmentRepository.updateUserEntertainmentById(
            entertainmentsUsersId,
            entertainment.entertainmentId,
            entertainmentData.grade,
            entertainmentData.comment
        );

        return;
    } else {
        const newEntertainment =
            await entertainmentRepository.createNewEntertainment(
                entertainmentData.name,
                entertainmentData.imageUrl,
                entertainmentData.typeId,
                entertainmentData.category1Id,
                entertainmentData.category2Id,
                entertainmentData.category3Id
            );

        await entertainmentRepository.updateUserEntertainmentById(
            entertainmentsUsersId,
            newEntertainment.id,
            entertainmentData.grade,
            entertainmentData.comment
        );
    }

    return;
}

export async function postNewEntertainment(
    userId: number,
    entertainmentData: Entertainment
) {
    const newEntertainment = await entertainmentRepository.createNewEntertainment(
        entertainmentData.name,
        entertainmentData.imageUrl,
        entertainmentData.typeId,
        entertainmentData.category1Id,
        entertainmentData.category2Id,
        entertainmentData.category3Id
    );

    console.log(entertainmentData);
    
    const newUserEntertainment =
        await entertainmentRepository.addNewEntertainment(
            userId,
            newEntertainment.id,
            entertainmentData.grade,
            entertainmentData.comment
        );

    return newUserEntertainment;
}

export async function postExistingEntertainment(
    userId: number,
    entertainmentId: number
) {
    await entertainmentRepository.addNewEntertainment(userId, entertainmentId, 0, " ");

    return
}

async function getAllEntertainments() {
    const list = await entertainmentRepository.getAllEntertainments();

    return list;
}

async function getEntertainmentByType(userId: number, typeName: string) {
    const list = await entertainmentRepository.getEntertainmentsByUserId(userId);
    const listFiltered = list.filter(
        (item) => item.entertainments.types.name === typeName
    );
    return listFiltered;
}

async function getEntertainmentQuantity(userId: number) {
    const entertainments =
        await entertainmentRepository.getEntertainmentsByUserId(userId);
    const generalEntertainments =
        await entertainmentRepository.getAllEntertainments();

    let quantity = {
        movies: 0,
        series: 0,
        animes: 0,
        cartoons: 0,
        books: 0,
        games: 0,
        userEntertainments: 0,
        allEntertainments: generalEntertainments.length,
    };

    entertainments.forEach((item) => {
        if (item.entertainments.types.name === "Filme") {
            quantity.movies += 1;
        }
        if (item.entertainments.types.name === "Série") {
            quantity.series += 1;
        }
        if (item.entertainments.types.name === "Anime") {
            quantity.animes += 1;
        }
        if (item.entertainments.types.name === "Desenho") {
            quantity.cartoons += 1;
        }
        if (item.entertainments.types.name === "Livro") {
            quantity.books += 1;
        }
        if (item.entertainments.types.name === "Jogo") {
            quantity.games += 1;
        }
        quantity.userEntertainments += 1;
    });

    return quantity;
}

async function getEntertainmentById(entertainmentId: number) {
    const list = await entertainmentRepository.getEntertainmentsById(entertainmentId);
    return list;
}

const entertainmentService = {
    getEntertainmentQuantity,
    getEntertainmentByType,
    getAllEntertainments,
    postNewEntertainment,
    putEntertainment,
    deleteEntertainment,
    getCategories,
    getEntertainmentById,
    postExistingEntertainment
};

export default entertainmentService;
