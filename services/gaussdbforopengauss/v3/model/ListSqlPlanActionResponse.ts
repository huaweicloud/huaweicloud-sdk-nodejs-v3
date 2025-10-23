import { SqlPlanStateListResponseSqlPlanBindStateList } from './SqlPlanStateListResponseSqlPlanBindStateList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSqlPlanActionResponse extends SdkResponse {
    public total?: number;
    private 'sql_plan_bind_state_list'?: Array<SqlPlanStateListResponseSqlPlanBindStateList>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSqlPlanActionResponse {
        this['total'] = total;
        return this;
    }
    public withSqlPlanBindStateList(sqlPlanBindStateList: Array<SqlPlanStateListResponseSqlPlanBindStateList>): ListSqlPlanActionResponse {
        this['sql_plan_bind_state_list'] = sqlPlanBindStateList;
        return this;
    }
    public set sqlPlanBindStateList(sqlPlanBindStateList: Array<SqlPlanStateListResponseSqlPlanBindStateList>  | undefined) {
        this['sql_plan_bind_state_list'] = sqlPlanBindStateList;
    }
    public get sqlPlanBindStateList(): Array<SqlPlanStateListResponseSqlPlanBindStateList> | undefined {
        return this['sql_plan_bind_state_list'];
    }
}