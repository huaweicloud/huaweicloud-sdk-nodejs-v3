

export class ItemResult {
    private 'alarm_rule_name'?: string;
    public constructor(alarmRuleName?: string) { 
        this['alarm_rule_name'] = alarmRuleName;
    }
    public withAlarmRuleName(alarmRuleName: string): ItemResult {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
}