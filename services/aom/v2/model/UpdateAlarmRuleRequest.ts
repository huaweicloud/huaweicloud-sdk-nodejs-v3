import { UpdateAlarmRuleParam } from './UpdateAlarmRuleParam';


export class UpdateAlarmRuleRequest {
    public body?: UpdateAlarmRuleParam;
    public constructor() { 
    }
    public withBody(body: UpdateAlarmRuleParam): UpdateAlarmRuleRequest {
        this['body'] = body;
        return this;
    }
}