import { UploadAppReq } from './UploadAppReq';


export class UploadAppRequest {
    public body?: UploadAppReq;
    public constructor() { 
    }
    public withBody(body: UploadAppReq): UploadAppRequest {
        this['body'] = body;
        return this;
    }
}