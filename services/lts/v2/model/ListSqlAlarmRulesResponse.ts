import { SqlAlarmRuleRespList } from './SqlAlarmRuleRespList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlAlarmRulesResponse extends SdkResponse {
    private 'sql_alarm_rules'?: Array<SqlAlarmRuleRespList>;
    public constructor() { 
        super();
    }
    public withSqlAlarmRules(sqlAlarmRules: Array<SqlAlarmRuleRespList>): ListSqlAlarmRulesResponse {
        this['sql_alarm_rules'] = sqlAlarmRules;
        return this;
    }
    public set sqlAlarmRules(sqlAlarmRules: Array<SqlAlarmRuleRespList>  | undefined) {
        this['sql_alarm_rules'] = sqlAlarmRules;
    }
    public get sqlAlarmRules(): Array<SqlAlarmRuleRespList> | undefined {
        return this['sql_alarm_rules'];
    }
}