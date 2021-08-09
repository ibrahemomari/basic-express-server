"use strict";
const server = require("../src/server");
const supertest = require("supertest");
const request = supertest(server.app);

describe("API Server", () => {
  // bad route
  it("handles not found request", async () => {
    const response = await request.get("/baaaadreqquuest");
    expect(response.status).toEqual(404);
  });

  // bad method
  it("handles my internal server errors", async () => {
    const response = await request.post("/bad"); 
    expect(response.status).toEqual(500);
  });
  
  

  it("/ route works", async () => {
    const response = await request.get("/");
    expect(response.status).toEqual(200);
    expect(response.text).toEqual("The server is working (^_^))");
  });
});
