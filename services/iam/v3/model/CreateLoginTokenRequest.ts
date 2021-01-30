import { CreateLoginTokenRequestBody } from './CreateLoginTokenRequestBody';


export class CreateLoginTokenRequest {
    public body?: CreateLoginTokenRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateLoginTokenRequestBody): CreateLoginTokenRequest {
        this['body'] = body;
        return this;
    }
}