import { VerifyRequestBody } from './VerifyRequestBody';


export class ValidateSignatureRequest {
    public body?: VerifyRequestBody;
    public constructor() { 
    }
    public withBody(body: VerifyRequestBody): ValidateSignatureRequest {
        this['body'] = body;
        return this;
    }
}