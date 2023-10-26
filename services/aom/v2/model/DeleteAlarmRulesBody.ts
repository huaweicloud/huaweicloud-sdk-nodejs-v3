

export class DeleteAlarmRulesBody {
    private 'alarm_rules'?: Array<string>;
    public constructor(alarmRules?: Array<string>) { 
        this['alarm_rules'] = alarmRules;
    }
    public withAlarmRules(alarmRules: Array<string>): DeleteAlarmRulesBody {
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