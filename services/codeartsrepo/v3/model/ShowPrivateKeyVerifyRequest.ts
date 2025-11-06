import { PrivateKeyVerify } from './PrivateKeyVerify';


export class ShowPrivateKeyVerifyRequest {
    public body?: PrivateKeyVerify;
    public constructor() { 
    }
    public withBody(body: PrivateKeyVerify): ShowPrivateKeyVerifyRequest {
        this['body'] = body;
        return this;
    }
}