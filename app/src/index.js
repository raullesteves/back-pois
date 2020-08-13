const SwaggerExpress = require("swagger-express-mw");
const SwaggerUi = require("swagger-ui-express");
const express = require("express");
const cors = require("cors");

const swaggerConfig = {
  appRoot: __dirname,
  swaggerFile: `${__dirname}/swagger.yaml`,
};

const onSwaggerCreated = (error, swaggerExpress) => {
  if (error) throw error;
  const swaggerDocument = swaggerExpress.runner.swagger;
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use("/docs", SwaggerUi.serve, SwaggerUi.setup(swaggerDocument));

  swaggerExpress.register(app);
  app.listen(4000, () => console.info("onAppStart", { port: 4000 }));
};

SwaggerExpress.create(swaggerConfig, onSwaggerCreated);
