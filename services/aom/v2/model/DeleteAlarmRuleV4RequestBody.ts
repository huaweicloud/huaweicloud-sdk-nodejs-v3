

export class DeleteAlarmRuleV4RequestBody {
    private 'alarm_rules'?: Array<string>;
    public constructor(alarmRules?: Array<string>) { 
        this['alarm_rules'] = alarmRules;
    }
    public withAlarmRules(alarmRules: Array<string>): DeleteAlarmRuleV4RequestBody {
        this['alarm_rules'] = alarmRules;
        return this;
    }
    public set alarmRules(alarmRules: Array<string>  | undefined) {
        this['alarm_rules'] = alarmRules;
    }
    public get alarmRules(): Array<string> | undefined {
        return this['alarm_rules'];
    }
}