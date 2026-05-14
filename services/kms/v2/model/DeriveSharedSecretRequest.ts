import { DeriveSharedSecretRequestBody } from './DeriveSharedSecretRequestBody';


export class DeriveSharedSecretRequest {
    public body?: DeriveSharedSecretRequestBody;
    public constructor() { 
    }
    public withBody(body: DeriveSharedSecretRequestBody): DeriveSharedSecretRequest {
        this['body'] = body;
        return this;
    }
}