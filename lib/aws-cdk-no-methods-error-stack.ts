import * as cdk from "@aws-cdk/core";
import * as apigw from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda-nodejs";

export class AwsCdkNoMethodsErrorStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api = new apigw.RestApi(this, "endpoint");
    const test = api.root.addResource("test");
    test.addMethod(
      "GET",
      new apigw.LambdaIntegration(new lambda.NodejsFunction(this, "handler"))
    );
  }
}
