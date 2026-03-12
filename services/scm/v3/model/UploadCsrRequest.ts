import { UploadCsrRequestBody } from './UploadCsrRequestBody';


export class UploadCsrRequest {
    public body?: UploadCsrRequestBody;
    public constructor() { 
    }
    public withBody(body: UploadCsrRequestBody): UploadCsrRequest {
        this['body'] = body;
        return this;
    }
}