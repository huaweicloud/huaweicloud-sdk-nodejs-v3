import { CheckCredentialRequestBody } from './CheckCredentialRequestBody';


export class CheckCredentialForBatchInspectionRequest {
    public body?: CheckCredentialRequestBody;
    public constructor() { 
    }
    public withBody(body: CheckCredentialRequestBody): CheckCredentialForBatchInspectionRequest {
        this['body'] = body;
        return this;
    }
}