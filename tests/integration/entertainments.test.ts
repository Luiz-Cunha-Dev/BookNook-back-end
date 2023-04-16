import app from "app";
import supertest from "supertest";
import httpStatus from "http-status";
import { cleanDb, getToken } from "../factories/users.factory";
import { createNewEntertainment } from "../factories/entertainments.factory";
import { faker } from "@faker-js/faker";

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("GET /entertainment/type/:typeName", () => {
  it("should respond with status 401 if no token is given", async () => {
    const entertainment = await createNewEntertainment();
    const response = await server.get(`/entertainment/type/${entertainment.type.name}`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 200", async () => {
    const token = (await getToken()).token;
    const entertainment = await createNewEntertainment();

    const response = await server.get(`/entertainment/type/${entertainment.type.name}`).set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.OK);
  });

});

describe("POST /entertainment/create", () => {
  it("should respond with status 401 if no token is given", async () => {
    const entertainment = await createNewEntertainment();
    const response = await server.post(`/entertainment/create`).send({
      "comment": faker.random.words(4),
      "grade": faker.random.numeric(),
      "imageUrl": faker.image.imageUrl(),
      "name": faker.name.fullName(),
      "typeId": entertainment.type.id
    });

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 201", async () => {
    const token = (await getToken()).token;
    const entertainment = await createNewEntertainment();

    const response = await server.post(`/entertainment/create`).set("Authorization", `Bearer ${token}`).send({
      comment: faker.random.words(4),
      grade: 1,
      imageUrl: faker.image.imageUrl(),
      name: faker.name.firstName(),
      typeId: entertainment.type.id,
      category1Id: entertainment.category.id,
      category2Id: entertainment.category.id,
      category3Id: entertainment.category.id
    });
    console.log(response);
    expect(response.status).toBe(httpStatus.CREATED);

    
  });

});