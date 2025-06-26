import { BatchChangeServerImageReq } from './BatchChangeServerImageReq';


export class BatchChangeServerImageRequest {
    public body?: BatchChangeServerImageReq;
    public constructor() { 
    }
    public withBody(body: BatchChangeServerImageReq): BatchChangeServerImageRequest {
        this['body'] = body;
        return this;
    }
}