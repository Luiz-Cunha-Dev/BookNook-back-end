import app from "app";
import supertest from "supertest";
import httpStatus from "http-status";
import { cleanDb, getToken } from "../factories/users.factory";
import { createNewEntertainment } from "../factories/entertainments.factory";

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("GET /goals/all", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get(`/goals/all`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 200", async () => {
    const token = (await getToken()).token;

    const response = await server.get(`/goals/all`).set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.OK);
  });

});

describe("POST /goals/create", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 401 if no token is given", async () => {
    const entertainment = await createNewEntertainment();
    const response = await server.post(`/goals/create`).send({
      quantity: 4,
      goal: 10,
      month: 9,
      year: 2024,
      typeId: entertainment.type.id
    });

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 201", async () => {
    const token = (await getToken()).token;
    const entertainment = await createNewEntertainment();

    const response = await server.post(`/goals/create`).set("Authorization", `Bearer ${token}`).send({
      quantity: 4,
      goal: 10,
      month: 9,
      year: 2024,
      typeId: entertainment.type.id
    });
    expect(response.status).toBe(httpStatus.CREATED);

    
  });

});