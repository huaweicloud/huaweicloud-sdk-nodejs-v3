import { CreateTemporaryAccessKeyByTokenRequestBody } from './CreateTemporaryAccessKeyByTokenRequestBody';


export class CreateTemporaryAccessKeyByTokenRequest {
    public body?: CreateTemporaryAccessKeyByTokenRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateTemporaryAccessKeyByTokenRequestBody): this {
        this.body = body;
        return this;
    }
}