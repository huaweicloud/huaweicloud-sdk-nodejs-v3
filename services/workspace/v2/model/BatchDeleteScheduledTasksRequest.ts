import { DeleteScheduledTasksReq } from './DeleteScheduledTasksReq';


export class BatchDeleteScheduledTasksRequest {
    public body?: DeleteScheduledTasksReq;
    public constructor() { 
    }
    public withBody(body: DeleteScheduledTasksReq): BatchDeleteScheduledTasksRequest {
        this['body'] = body;
        return this;
    }
}