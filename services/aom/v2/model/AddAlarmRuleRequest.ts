import { AlarmRuleParam } from './AlarmRuleParam';


export class AddAlarmRuleRequest {
    public body?: AlarmRuleParam;
    public constructor() { 
    }
    public withBody(body: AlarmRuleParam): AddAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}