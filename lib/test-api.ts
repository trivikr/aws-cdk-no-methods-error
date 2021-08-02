import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda-nodejs";

export class TestApi extends cdk.Construct {
  public readonly handler: lambda.NodejsFunction;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    this.handler = new lambda.NodejsFunction(this, "handler");
  }
}
