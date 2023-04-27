
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSqlAlarmRuleResponse extends SdkResponse {
    private 'sql_alarm_rule_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSqlAlarmRuleId(sqlAlarmRuleId: string): CreateSqlAlarmRuleResponse {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
        return this;
    }
    public set sqlAlarmRuleId(sqlAlarmRuleId: string | undefined) {
        this['sql_alarm_rule_id'] = sqlAlarmRuleId;
    }
    public get sqlAlarmRuleId() {
        return this['sql_alarm_rule_id'];
    }
}