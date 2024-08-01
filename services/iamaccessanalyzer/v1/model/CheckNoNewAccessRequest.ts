import { CheckNoNewAccessReqBody } from './CheckNoNewAccessReqBody';


export class CheckNoNewAccessRequest {
    public body?: CheckNoNewAccessReqBody;
    public constructor() { 
    }
    public withBody(body: CheckNoNewAccessReqBody): CheckNoNewAccessRequest {
        this['body'] = body;
        return this;
    }
}