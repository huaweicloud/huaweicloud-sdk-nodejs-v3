import { ImageBatchSyncReq } from './ImageBatchSyncReq';


export class BatchCheckImageSyncRequest {
    public body?: ImageBatchSyncReq;
    public constructor() { 
    }
    public withBody(body: ImageBatchSyncReq): BatchCheckImageSyncRequest {
        this['body'] = body;
        return this;
    }
}