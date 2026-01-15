import { CheckCidrRequestBody } from './CheckCidrRequestBody';


export class CheckCidrRequest {
    public body?: CheckCidrRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckCidrRequestBody): CheckCidrRequest {
        this['body'] = body;
        return this;
    }
}