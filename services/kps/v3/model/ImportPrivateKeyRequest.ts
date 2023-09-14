import { ImportPrivateKeyRequestBody } from './ImportPrivateKeyRequestBody';


export class ImportPrivateKeyRequest {
    public body?: ImportPrivateKeyRequestBody;
    public constructor() { 
    }
    public withBody(body: ImportPrivateKeyRequestBody): ImportPrivateKeyRequest {
        this['body'] = body;
        return this;
    }
}