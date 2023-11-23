import { CreateFunctionAppRequestBody } from './CreateFunctionAppRequestBody';


export class CreateFunctionAppRequest {
    public body?: CreateFunctionAppRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFunctionAppRequestBody): CreateFunctionAppRequest {
        this['body'] = body;
        return this;
    }
}