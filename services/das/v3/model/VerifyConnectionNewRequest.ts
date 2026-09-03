import { VerifyConnectionNewRequestBody } from './VerifyConnectionNewRequestBody';


export class VerifyConnectionNewRequest {
    public body?: VerifyConnectionNewRequestBody;
    public constructor() { 
    }
    public withBody(body: VerifyConnectionNewRequestBody): VerifyConnectionNewRequest {
        this['body'] = body;
        return this;
    }
}