import { EncryptDataRequestBody } from './EncryptDataRequestBody';


export class EncryptDataRequest {
    public body?: EncryptDataRequestBody;
    public constructor() { 
    }
    public withBody(body: EncryptDataRequestBody): EncryptDataRequest {
        this['body'] = body;
        return this;
    }
}