import { BatchDeleteScheduleTaskReq } from './BatchDeleteScheduleTaskReq';


export class BatchDeleteScheduleTaskRequest {
    public body?: BatchDeleteScheduleTaskReq;
    public constructor() { 
    }
    public withBody(body: BatchDeleteScheduleTaskReq): BatchDeleteScheduleTaskRequest {
        this['body'] = body;
        return this;
    }
}