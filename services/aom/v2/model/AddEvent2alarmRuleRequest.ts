import { Event2alarmRuleBody } from './Event2alarmRuleBody';


export class AddEvent2alarmRuleRequest {
    public body?: Event2alarmRuleBody;
    public constructor() { 
    }
    public withBody(body: Event2alarmRuleBody): AddEvent2alarmRuleRequest {
        this['body'] = body;
        return this;
    }
}