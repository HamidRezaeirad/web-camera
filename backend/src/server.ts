import app from "./app";
import { debug, swaggerDoc } from "./helpers";

const expressSwagger = require("express-swagger-generator")(app);

const server = app.listen(app.get("port"), () => {
  debug(
    "App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  debug("Press CTRL-C to stop\n");
});

if (app.get("env") === "debug") expressSwagger(swaggerDoc(app.get("port")));

export default server;
