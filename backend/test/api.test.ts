import chai from "chai";
import chaiHttp from "chai-http";
import app from "../src/app";

chai.use(chaiHttp);
const excpect = chai.expect;

describe("GET /api", () => {
  it("should return 200 OK", (done) => {
    chai
      .request(app)
      .get("/api/health")
      .then((res) => {
        excpect(res).to.have.status(200);
        done();
      });
  });
});
