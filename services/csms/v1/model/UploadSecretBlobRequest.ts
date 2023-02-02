import { UploadSecretBlobRequestBody } from './UploadSecretBlobRequestBody';


export class UploadSecretBlobRequest {
    public body?: UploadSecretBlobRequestBody;
    public constructor() { 
    }
    public withBody(body: UploadSecretBlobRequestBody): UploadSecretBlobRequest {
        this['body'] = body;
        return this;
    }
}