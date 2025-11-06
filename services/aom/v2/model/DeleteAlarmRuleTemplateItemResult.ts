

export class DeleteAlarmRuleTemplateItemResult {
    private 'alarm_rule_template_name'?: string;
    public constructor(alarmRuleTemplateName?: string) { 
        this['alarm_rule_template_name'] = alarmRuleTemplateName;
    }
    public withAlarmRuleTemplateName(alarmRuleTemplateName: string): DeleteAlarmRuleTemplateItemResult {
        this['alarm_rule_template_name'] = alarmRuleTemplateName;
        return this;
    }
    public set alarmRuleTemplateName(alarmRuleTemplateName: string  | undefined) {
        this['alarm_rule_template_name'] = alarmRuleTemplateName;
    }
    public get alarmRuleTemplateName(): string | undefined {
        return this['alarm_rule_template_name'];
    }
}