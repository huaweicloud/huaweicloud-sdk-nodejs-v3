import { CreateAlarmRequestBody } from './CreateAlarmRequestBody';


export class CreateAlarmRequest {
    public body?: CreateAlarmRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateAlarmRequestBody): CreateAlarmRequest {
        this['body'] = body;
        return this;
    }
}