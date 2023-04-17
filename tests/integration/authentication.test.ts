import app from "app";
import supertest from "supertest";
import httpStatus from "http-status";
import { cleanDb, getToken, getUser } from "../factories/users.factory";
import { faker } from "@faker-js/faker";

export const server = supertest(app);

beforeEach(async () => {
  await cleanDb();
});

describe("POST /signup", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 403", async () => {
    const userEmail = (await getToken()).user.email;
    const response = await server.post(`/signup`).send({
      username: faker.name.firstName(),
      email: userEmail,
      password: faker.internet.password()
    });

    expect(response.status).toBe(httpStatus.FORBIDDEN);
  });

  it("should respond with status 201", async () => {
    const response = await server.post(`/signup`).send({
      username: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    expect(response.status).toBe(httpStatus.CREATED);

    
  });

});

describe("POST /signin", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 404", async () => {
    const response = await server.post(`/signin`).send({
      email: faker.internet.email(),
      password: faker.internet.password()
    });

    expect(response.status).toBe(httpStatus.NOT_FOUND);
  });

  it("should respond with status 403", async () => {
    const user = (await getToken()).user;
    const response = await server.post(`/signin`).send({
      email: user.email,
      password: faker.internet.password()
    });

    expect(response.status).toBe(httpStatus.FORBIDDEN);
  });

  it("should respond with status 200", async () => {
    const user = (await getUser());
    const response = await server.post(`/signin`).send({
      email: user.email,
      password: user.password
    });
    expect(response.status).toBe(httpStatus.OK);

    
  });

});

describe("DELETE /logout", () => {
  beforeEach(async () => {
    await cleanDb();
  });
  it("should respond with status 401 if no token is given", async () => {
    const response = await server.delete(`/logout`);

    expect(response.status).toBe(httpStatus.UNAUTHORIZED);
  });

  it("should respond with status 201", async () => {
    const token = (await getToken()).token;

    const response = await server.delete(`/logout`).set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(httpStatus.OK);

    
  });

});