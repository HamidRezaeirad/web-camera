"use strict";
const swaggerDoc = (port: string) => {
  return {
    swaggerDefinition: {
      info: {
        description: "Swagger Doc for Scan Document",
        title: "Scan Document",
        version: "1.0.0",
      },
      host: `localhost:${port}`,
      basePath: "/",
      produces: ["application/json"],
      schemes: ["http"],
    },
    basedir: __dirname,
    files: ["../routers/*.router.ts"],
  };
};

export { swaggerDoc };
