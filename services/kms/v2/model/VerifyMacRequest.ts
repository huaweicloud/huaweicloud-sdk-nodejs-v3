import { VerifyMacRequestBody } from './VerifyMacRequestBody';


export class VerifyMacRequest {
    public body?: VerifyMacRequestBody;
    public constructor() { 
    }
    public withBody(body: VerifyMacRequestBody): VerifyMacRequest {
        this['body'] = body;
        return this;
    }
}