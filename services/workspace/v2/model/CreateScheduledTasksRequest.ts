import { CreateScheduledTasksReq } from './CreateScheduledTasksReq';


export class CreateScheduledTasksRequest {
    public body?: CreateScheduledTasksReq;
    public constructor() { 
    }
    public withBody(body: CreateScheduledTasksReq): CreateScheduledTasksRequest {
        this['body'] = body;
        return this;
    }
}