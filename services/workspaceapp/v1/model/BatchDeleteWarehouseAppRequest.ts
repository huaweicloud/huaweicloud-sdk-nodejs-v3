import { BatchDeleteWarehouseAppReq } from './BatchDeleteWarehouseAppReq';


export class BatchDeleteWarehouseAppRequest {
    public body?: BatchDeleteWarehouseAppReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteWarehouseAppReq): BatchDeleteWarehouseAppRequest {
        this['body'] = body;
        return this;
    }
}