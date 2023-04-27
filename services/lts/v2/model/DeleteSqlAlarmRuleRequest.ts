

export class DeleteSqlAlarmRuleRequest {
    private 'sql_alarm_rule_id': string | undefined;
    private 'Content-Type': string | undefined;
    public constructor(sqlAlarmRuleId?: any, contentType?: any) { 
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        this['Content-Type'] = contentType;
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): DeleteSqlAlarmRuleRequest {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId() {
        return this['sql_alarm_rule_id'];
    }
    public withContentType(contentType: string): DeleteSqlAlarmRuleRequest {
        this['Content-Type'] = contentType;
        return this;
    }
    public set contentType(contentType: string | undefined) {
        this['Content-Type'] = contentType;
    }
    public get contentType() {
        return this['Content-Type'];
    }
}