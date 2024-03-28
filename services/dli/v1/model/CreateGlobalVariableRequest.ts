import { CreateGlobalVariableRequestBody } from './CreateGlobalVariableRequestBody';


export class CreateGlobalVariableRequest {
    public body?: CreateGlobalVariableRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateGlobalVariableRequestBody): CreateGlobalVariableRequest {
        this['body'] = body;
        return this;
    }
}