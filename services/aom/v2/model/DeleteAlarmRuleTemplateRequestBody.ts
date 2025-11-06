

export class DeleteAlarmRuleTemplateRequestBody {
    private 'alarm_rule_templates'?: Array<string>;
    public constructor(alarmRuleTemplates?: Array<string>) { 
        this['alarm_rule_templates'] = alarmRuleTemplates;
    }
    public withAlarmRuleTemplates(alarmRuleTemplates: Array<string>): DeleteAlarmRuleTemplateRequestBody {
        this['alarm_rule_templates'] = alarmRuleTemplates;
        return this;
    }
    public set alarmRuleTemplates(alarmRuleTemplates: Array<string>  | undefined) {
        this['alarm_rule_templates'] = alarmRuleTemplates;
    }
    public get alarmRuleTemplates(): Array<string> | undefined {
        return this['alarm_rule_templates'];
    }
}