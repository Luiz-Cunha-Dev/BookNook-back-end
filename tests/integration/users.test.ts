import app from "app";
import supertest from "supertest";
import httpStatus from "http-status";
import { cleanDb, getToken } from "../factories/users.factory";
import { faker } from "@faker-js/faker";

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("PUT /user/informations", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.put(`/user/informations`).send({
      "pictureUrl": faker.image.imageUrl(),
      "email": faker.internet.email(),
      "username": faker.name.firstName()
    });

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 201", async () => {
    const token = (await getToken()).token;

    const response = await server.put(`/user/informations`).set("Authorization", `Bearer ${token}`).send({
      "pictureUrl": faker.image.imageUrl(),
      "email": faker.internet.email(),
      "username": faker.name.firstName()
    });
    expect(response.status).toBe(httpStatus.OK);
    
  });

});