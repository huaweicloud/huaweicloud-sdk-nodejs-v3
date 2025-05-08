import { UploadByUrlReq } from './UploadByUrlReq';


export class CreateUploadByUrlRequest {
    public body?: UploadByUrlReq;
    public constructor() { 
    }
    public withBody(body: UploadByUrlReq): CreateUploadByUrlRequest {
        this['body'] = body;
        return this;
    }
}