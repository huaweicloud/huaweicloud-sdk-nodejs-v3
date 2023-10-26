
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAlarmRuleResponse extends SdkResponse {
    private 'alarm_rule_id'?: number;
    public constructor() { 
        super();
    }
    public withAlarmRuleId(alarmRuleId: number): UpdateAlarmRuleResponse {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: number  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): number | undefined {
        return this['alarm_rule_id'];
    }
}