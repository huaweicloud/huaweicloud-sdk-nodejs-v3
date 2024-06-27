

export class AddOrUpdateAlarmRuleV4ItemResult {
    private 'alarm_rule_name'?: string;
    public result?: string;
    public constructor(alarmRuleName?: string, result?: string) { 
        this['alarm_rule_name'] = alarmRuleName;
        this['result'] = result;
    }
    public withAlarmRuleName(alarmRuleName: string): AddOrUpdateAlarmRuleV4ItemResult {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withResult(result: string): AddOrUpdateAlarmRuleV4ItemResult {
        this['result'] = result;
        return this;
    }
}