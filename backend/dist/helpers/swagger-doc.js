"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerDoc = void 0;
const swaggerDoc = (port) => {
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
exports.swaggerDoc = swaggerDoc;
//# sourceMappingURL=swagger-doc.js.map