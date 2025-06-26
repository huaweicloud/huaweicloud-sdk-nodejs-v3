import { CreateScheduleTaskReq } from './CreateScheduleTaskReq';


export class CreateScheduleTaskRequest {
    public body?: CreateScheduleTaskReq;
    public constructor() { 
    }
    public withBody(body: CreateScheduleTaskReq): CreateScheduleTaskRequest {
        this['body'] = body;
        return this;
    }
}