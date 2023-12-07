import { BatchUpdateTasksReq } from './BatchUpdateTasksReq';


export class BatchUpdateTasksRequest {
    public body?: BatchUpdateTasksReq;
    public constructor() { 
    }
    public withBody(body: BatchUpdateTasksReq): BatchUpdateTasksRequest {
        this['body'] = body;
        return this;
    }
}