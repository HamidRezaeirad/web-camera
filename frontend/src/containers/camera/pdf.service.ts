import PdfServer from "../../servers/api.server";

const sendPdf = (params) => {
  return new Promise((resolve, reject) => {
    PdfServer.post("/document/sendPdf", params)
      .then((doc) => {
        resolve(doc);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export { sendPdf };
