import { ChangeAlarmRuleStatus } from './ChangeAlarmRuleStatus';


export class UpdateAlarmRuleStatusRequest {
    public body?: ChangeAlarmRuleStatus;
    public constructor() { 
    }
    public withBody(body: ChangeAlarmRuleStatus): UpdateAlarmRuleStatusRequest {
        this['body'] = body;
        return this;
    }
}