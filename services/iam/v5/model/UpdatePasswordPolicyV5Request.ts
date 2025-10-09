import { UpdatePasswordPolicyReqBody } from './UpdatePasswordPolicyReqBody';


export class UpdatePasswordPolicyV5Request {
    public body?: UpdatePasswordPolicyReqBody;
    public constructor() { 
    }
    public withBody(body: UpdatePasswordPolicyReqBody): UpdatePasswordPolicyV5Request {
        this['body'] = body;
        return this;
    }
}