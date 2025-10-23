

export class BatchAlarmRulesBody {
    private 'alarm_rule_enable'?: boolean;
    private 'alarm_rule_id'?: number;
    private 'alarm_rule_name'?: string;
    private 'alarm_rule_type'?: string;
    private 'enterprise_project_id'?: string;
    public constructor(alarmRuleEnable?: boolean, alarmRuleId?: number, alarmRuleName?: string, alarmRuleType?: string, enterpriseProjectId?: string) { 
        this['alarm_rule_enable'] = alarmRuleEnable;
        this['alarm_rule_id'] = alarmRuleId;
        this['alarm_rule_name'] = alarmRuleName;
        this['alarm_rule_type'] = alarmRuleType;
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public withAlarmRuleEnable(alarmRuleEnable: boolean): BatchAlarmRulesBody {
        this['alarm_rule_enable'] = alarmRuleEnable;
        return this;
    }
    public set alarmRuleEnable(alarmRuleEnable: boolean  | undefined) {
        this['alarm_rule_enable'] = alarmRuleEnable;
    }
    public get alarmRuleEnable(): boolean | undefined {
        return this['alarm_rule_enable'];
    }
    public withAlarmRuleId(alarmRuleId: number): BatchAlarmRulesBody {
        this['alarm_rule_id'] = alarmRuleId;
        return this;
    }
    public set alarmRuleId(alarmRuleId: number  | undefined) {
        this['alarm_rule_id'] = alarmRuleId;
    }
    public get alarmRuleId(): number | undefined {
        return this['alarm_rule_id'];
    }
    public withAlarmRuleName(alarmRuleName: string): BatchAlarmRulesBody {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withAlarmRuleType(alarmRuleType: string): BatchAlarmRulesBody {
        this['alarm_rule_type'] = alarmRuleType;
        return this;
    }
    public set alarmRuleType(alarmRuleType: string  | undefined) {
        this['alarm_rule_type'] = alarmRuleType;
    }
    public get alarmRuleType(): string | undefined {
        return this['alarm_rule_type'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): BatchAlarmRulesBody {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}