import { CreateTokenReqBody } from './CreateTokenReqBody';


export class CreateTokenRequest {
    public body?: CreateTokenReqBody;
    public constructor() { 
    }
    public withBody(body: CreateTokenReqBody): CreateTokenRequest {
        this['body'] = body;
        return this;
    }
}