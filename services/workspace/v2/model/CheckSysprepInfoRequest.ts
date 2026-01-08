import { CheckSysprepInfoRequestBody } from './CheckSysprepInfoRequestBody';


export class CheckSysprepInfoRequest {
    public body?: CheckSysprepInfoRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckSysprepInfoRequestBody): CheckSysprepInfoRequest {
        this['body'] = body;
        return this;
    }
}