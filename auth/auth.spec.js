const request = require("supertest");

const server = require("../api/server");

describe("AuthenticationROuter", function() {
  it("Will run tests", function() {
    expect(true).toBe(true);
  });

  describe("Posting to register", function() {
    it("Should have a return of 200, ok", function() {
      return request(server)
        .post("/api/auth/register")
        .send({ username: "marco123", password: "marco123" })
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.type).toMatch(/json/);
        });
    });
  });
  describe("login post", function() {
    it("should return json for login and status 200", function() {
      return request(server)
        .post("/api/auth/login")
        .send({ username: "marco123", password: "marco123" })
        .then(res => {
          expect(res.status).toBe(200);
          expect(res.type).toMatch(/json/);
        });
    });
  });
  describe("server.js Get /", function() {
    it('should respond with {message: "welcome"}', function() {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.body.message).toBe("welcome");
        });
    });
  });
});
