import { CreateAppRequestBody } from './CreateAppRequestBody';


export class CreateAppRequest {
    public body?: CreateAppRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAppRequestBody): CreateAppRequest {
        this['body'] = body;
        return this;
    }
}