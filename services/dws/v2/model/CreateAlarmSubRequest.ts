import { AlarmSubRequest } from './AlarmSubRequest';


export class CreateAlarmSubRequest {
    public body?: AlarmSubRequest;
    public constructor() { 
    }
    public withBody(body: AlarmSubRequest): CreateAlarmSubRequest {
        this['body'] = body;
        return this;
    }
}