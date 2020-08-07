import app from "../src/app";
import chai from "chai";
import chaiHttp from "chai-http";
import { base64 } from "../const/static";
import { xApikey } from "../src/helpers";
import moment from "moment";

chai.use(chaiHttp);
const excpect = chai.expect;
let fileName: string = moment.utc(new Date()).format("MM-DD-YYYY-hh-mm-ss");

describe("POST /api/document/sendPdf", () => {
  it("should return 401 Unauthorized", (done) => {
    chai
      .request(app)
      .post("/api/document/sendPdf")
      .send({
        fileName,
        base64,
      })
      .then((res: any) => {
        excpect(res).to.have.status(401);
        done();
      });
  });

  it("should return 200 OK", (done) => {
    chai
      .request(app)
      .post("/api/document/sendPdf")
      .set("x-api-key", xApikey)
      .send({
        fileName,
        base64,
      })
      .then((res: any) => {
        excpect(res).to.have.status(200);
        excpect(res.body).to.have.property("accepted");
        done();
      });
  });
});
