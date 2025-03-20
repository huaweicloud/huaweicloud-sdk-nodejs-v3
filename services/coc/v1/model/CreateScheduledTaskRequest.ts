import { ScheduledTaskRequestBody } from './ScheduledTaskRequestBody';


export class CreateScheduledTaskRequest {
    public body?: ScheduledTaskRequestBody;
    public constructor() { 
    }
    public withBody(body: ScheduledTaskRequestBody): CreateScheduledTaskRequest {
        this['body'] = body;
        return this;
    }
}