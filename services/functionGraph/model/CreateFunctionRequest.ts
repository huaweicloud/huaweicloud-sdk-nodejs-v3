import { CreateFunctionRequestBody  } from "./CreateFunctionRequestBody";

export class CreateFunctionRequest{
    public body?: CreateFunctionRequestBody;
    public constructor() {}
    public withBody(body: CreateFunctionRequestBody): CreateFunctionRequest{
        this['body'] = body;
        return this;
    }
}