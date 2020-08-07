import axios from "axios";

const PdfServer = axios.create({
  baseURL: "http://localhost:3001/api",
});

PdfServer.defaults.headers.post["x-api-key"] =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.1zpyyKMG6IR8T12sPzQ6Qe6Z4f1GSaLHInevyJnXhSw";

export default PdfServer;
