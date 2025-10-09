import { UpdateTokenPolicyReqBody } from './UpdateTokenPolicyReqBody';


export class UpdateTokenPolicyV5Request {
    public body?: UpdateTokenPolicyReqBody;
    public constructor() { 
    }
    public withBody(body: UpdateTokenPolicyReqBody): UpdateTokenPolicyV5Request {
        this['body'] = body;
        return this;
    }
}