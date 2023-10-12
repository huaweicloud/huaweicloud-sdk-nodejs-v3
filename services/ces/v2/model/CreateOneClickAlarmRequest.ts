import { EnableOneClickAlarmRequestBody } from './EnableOneClickAlarmRequestBody';


export class CreateOneClickAlarmRequest {
    public body?: EnableOneClickAlarmRequestBody;
    public constructor() { 
    }
    public withBody(body: EnableOneClickAlarmRequestBody): CreateOneClickAlarmRequest {
        this['body'] = body;
        return this;
    }
}