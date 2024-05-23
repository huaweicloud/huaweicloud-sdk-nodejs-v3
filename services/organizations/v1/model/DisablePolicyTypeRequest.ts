import { PolicyTypeReqBody } from './PolicyTypeReqBody';


export class DisablePolicyTypeRequest {
    public body?: PolicyTypeReqBody;
    public constructor() { 
    }
    public withBody(body: PolicyTypeReqBody): DisablePolicyTypeRequest {
        this['body'] = body;
        return this;
    }
}