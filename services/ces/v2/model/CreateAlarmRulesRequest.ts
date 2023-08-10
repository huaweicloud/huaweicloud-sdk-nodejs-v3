import { PostAlarmsReqV2 } from './PostAlarmsReqV2';


export class CreateAlarmRulesRequest {
    public body?: PostAlarmsReqV2;
    public constructor() { 
    }
    public withBody(body: PostAlarmsReqV2): CreateAlarmRulesRequest {
        this['body'] = body;
        return this;
    }
}