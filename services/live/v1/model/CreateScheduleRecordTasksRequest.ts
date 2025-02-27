import { ScheduleRecordTasksReq } from './ScheduleRecordTasksReq';


export class CreateScheduleRecordTasksRequest {
    public body?: ScheduleRecordTasksReq;
    public constructor() { 
    }
    public withBody(body: ScheduleRecordTasksReq): CreateScheduleRecordTasksRequest {
        this['body'] = body;
        return this;
    }
}