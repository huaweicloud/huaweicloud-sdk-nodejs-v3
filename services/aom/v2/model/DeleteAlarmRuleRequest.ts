

export class DeleteAlarmRuleRequest {
    private 'alarm_rule_id'?: string;
    public constructor(alarmRuleId?: string) { 
        this['alarm_rule_id'] = alarmRuleId;
    }
    public withAlarmRuleId(alarmRuleId: string): DeleteAlarmRuleRequest {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: string  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): string | undefined {
        return this['alarm_rule_id'];
    }
}