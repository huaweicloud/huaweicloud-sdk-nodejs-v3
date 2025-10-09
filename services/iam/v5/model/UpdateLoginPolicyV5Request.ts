import { UpdateLoginPolicyReqBody } from './UpdateLoginPolicyReqBody';


export class UpdateLoginPolicyV5Request {
    public body?: UpdateLoginPolicyReqBody;
    public constructor() { 
    }
    public withBody(body: UpdateLoginPolicyReqBody): UpdateLoginPolicyV5Request {
        this['body'] = body;
        return this;
    }
}