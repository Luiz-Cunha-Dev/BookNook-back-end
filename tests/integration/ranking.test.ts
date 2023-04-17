import app from "app";
import supertest from "supertest";
import httpStatus from "http-status";
import { cleanDb, getToken } from "../factories/users.factory";

const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("GET /ranking/general", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.get(`/ranking/general`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 200", async () => {
    const token = (await getToken()).token;

    const response = await server.get(`/ranking/general`).set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(httpStatus.OK);
  });

});
