import { SqlLimitRule } from './SqlLimitRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlLimitRulesResponse extends SdkResponse {
    private 'sql_limit_rules'?: Array<SqlLimitRule>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSqlLimitRules(sqlLimitRules: Array<SqlLimitRule>): ListSqlLimitRulesResponse {
        this['sql_limit_rules'] = sqlLimitRules;
        return this;
    }
    public set sqlLimitRules(sqlLimitRules: Array<SqlLimitRule>  | undefined) {
        this['sql_limit_rules'] = sqlLimitRules;
    }
    public get sqlLimitRules(): Array<SqlLimitRule> | undefined {
        return this['sql_limit_rules'];
    }
    public withTotalCount(totalCount: number): ListSqlLimitRulesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}