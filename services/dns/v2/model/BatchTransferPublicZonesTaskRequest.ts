import { BatchTransferPublicZonesTaskRequestBody } from './BatchTransferPublicZonesTaskRequestBody';


export class BatchTransferPublicZonesTaskRequest {
    public body?: BatchTransferPublicZonesTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: BatchTransferPublicZonesTaskRequestBody): BatchTransferPublicZonesTaskRequest {
        this['body'] = body;
        return this;
    }
}