import { Event2alarmRuleBody } from './Event2alarmRuleBody';


export class UpdateEventRuleRequest {
    public body?: Event2alarmRuleBody;
    public constructor() { 
    }
    public withBody(body: Event2alarmRuleBody): UpdateEventRuleRequest {
        this['body'] = body;
        return this;
    }
}