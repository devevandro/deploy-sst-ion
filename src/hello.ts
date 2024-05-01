import { APIGatewayProxyHandlerV2 } from "aws-lambda";

export const welcome: APIGatewayProxyHandlerV2 = async () => {
  return {
    statusCode: 200,
    body: "Hello Twich",
  };
};
