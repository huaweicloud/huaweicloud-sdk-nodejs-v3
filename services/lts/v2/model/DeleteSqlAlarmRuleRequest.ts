

export class DeleteSqlAlarmRuleRequest {
    private 'sql_alarm_rule_id'?: string;
    private 'Content-Type'?: string;
    public constructor(sqlAlarmRuleId?: string, contentType?: string) { 
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        this['Content-Type'] = contentType;
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): DeleteSqlAlarmRuleRequest {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string  | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId(): string | undefined {
        return this['sql_alarm_rule_id'];
    }
    public withContentType(contentType: string): DeleteSqlAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string  | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType(): string | undefined {
        return this['Content-Type'];
    }
}