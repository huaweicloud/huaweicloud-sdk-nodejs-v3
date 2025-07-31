import { CreatePasswordChangePlanRequestBody } from './CreatePasswordChangePlanRequestBody';


export class CreatePasswordChangePlanRequest {
    public body?: CreatePasswordChangePlanRequestBody;
    public constructor() { 
    }
    public withBody(body: CreatePasswordChangePlanRequestBody): CreatePasswordChangePlanRequest {
        this['body'] = body;
        return this;
    }
}