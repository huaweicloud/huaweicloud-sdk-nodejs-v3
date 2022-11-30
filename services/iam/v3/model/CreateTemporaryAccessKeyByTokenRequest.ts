import { CreateTemporaryAccessKeyByTokenRequestBody } from './CreateTemporaryAccessKeyByTokenRequestBody';


export class CreateTemporaryAccessKeyByTokenRequest {
    public body?: CreateTemporaryAccessKeyByTokenRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemporaryAccessKeyByTokenRequestBody): CreateTemporaryAccessKeyByTokenRequest {
        this['body'] = body;
        return this;
    }
}