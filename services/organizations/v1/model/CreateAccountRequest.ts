import { CreateAccountReqBody } from './CreateAccountReqBody';


export class CreateAccountRequest {
    public body?: CreateAccountReqBody;
    public constructor() { 
    }
    public withBody(body: CreateAccountReqBody): CreateAccountRequest {
        this['body'] = body;
        return this;
    }
}