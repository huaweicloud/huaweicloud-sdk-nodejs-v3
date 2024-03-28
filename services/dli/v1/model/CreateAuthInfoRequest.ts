import { CreateAuthInfoRequestBody } from './CreateAuthInfoRequestBody';


export class CreateAuthInfoRequest {
    public body?: CreateAuthInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAuthInfoRequestBody): CreateAuthInfoRequest {
        this['body'] = body;
        return this;
    }
}