import { CreatePolicyReqBody } from './CreatePolicyReqBody';


export class CreatePolicyV5Request {
    public body?: CreatePolicyReqBody;
    public constructor() { 
    }
    public withBody(body: CreatePolicyReqBody): CreatePolicyV5Request {
        this['body'] = body;
        return this;
    }
}