const request = require("supertest");

const server = require("../api/server");

describe("Auth Router", function() {
  it("should run tests", function() {
    expect(true).toBe(true);
  });

  describe("GET /jokes", function() {
    it("should return 401", function() {
      return request(server)
        .get("/api/jokes")
        .then(res => {
          expect(res.status).toBe(400);
          expect(res.type).toMatch(/json/);
        });
    });

    it("should return 200", function() {
      return request(server)
        .get("/api/jokes")
        .set({
          authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo0LCJ1c2VybmFtZSI6InRlc3RpbmcxMjMiLCJkZXBhcnRtZW50Ijoibm9uZSIsImlhdCI6MTU4NTMyNTM3MSwiZXhwIjoxNTg1MzI4OTcxfQ.hvWjr1AFivEX6MFO6TCa_IRuK31dsgfLdtqEf7kLM30"
        })

        .then(res => {
          expect(res.status).toBe(200);
          expect(res.type).toMatch(/json/);
        });
    });
  });
});
