import { ReEncryptRequestBody } from './ReEncryptRequestBody';


export class ReEncryptRequest {
    public body?: ReEncryptRequestBody;
    public constructor() { 
    }
    public withBody(body: ReEncryptRequestBody): ReEncryptRequest {
        this['body'] = body;
        return this;
    }
}