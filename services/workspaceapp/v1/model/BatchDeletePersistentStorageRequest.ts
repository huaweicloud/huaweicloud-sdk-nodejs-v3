import { BatchDeletePersistentStorageReq } from './BatchDeletePersistentStorageReq';


export class BatchDeletePersistentStorageRequest {
    public body?: BatchDeletePersistentStorageReq;
    public constructor() { 
    }
    public withBody(body: BatchDeletePersistentStorageReq): BatchDeletePersistentStorageRequest {
        this['body'] = body;
        return this;
    }
}