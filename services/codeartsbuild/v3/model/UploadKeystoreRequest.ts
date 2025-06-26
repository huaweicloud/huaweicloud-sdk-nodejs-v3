import { UploadKeystoreRequestBody } from './UploadKeystoreRequestBody';


export class UploadKeystoreRequest {
    public body?: UploadKeystoreRequestBody;
    public constructor() { 
    }
    public withBody(body: UploadKeystoreRequestBody): UploadKeystoreRequest {
        this['body'] = body;
        return this;
    }
}