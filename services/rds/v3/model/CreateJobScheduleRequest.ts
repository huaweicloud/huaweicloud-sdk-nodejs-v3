import { CreateJobScheduleRequestBody } from './CreateJobScheduleRequestBody';


export class CreateJobScheduleRequest {
    public body?: CreateJobScheduleRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateJobScheduleRequestBody): CreateJobScheduleRequest {
        this['body'] = body;
        return this;
    }
}