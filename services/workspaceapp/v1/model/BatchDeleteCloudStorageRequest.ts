import { BatchDeleteCloudStorageReq } from './BatchDeleteCloudStorageReq';


export class BatchDeleteCloudStorageRequest {
    public body?: BatchDeleteCloudStorageReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteCloudStorageReq): BatchDeleteCloudStorageRequest {
        this['body'] = body;
        return this;
    }
}