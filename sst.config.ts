/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "sst-ion-example",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const func = new sst.aws.Function("MyFunction", {
      handler: "src/hello.welcome",
      url: true,
    });

    return {
      url: func.url,
    };
  },
});
