import { SqlKillingTaskResp } from './SqlKillingTaskResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowKillProcessTaskResponse extends SdkResponse {
    private 'sql_killing_task_resp_list'?: Array<SqlKillingTaskResp>;
    public constructor() { 
        super();
    }
    public withSqlKillingTaskRespList(sqlKillingTaskRespList: Array<SqlKillingTaskResp>): ShowKillProcessTaskResponse {
        this['sql_killing_task_resp_list'] = sqlKillingTaskRespList;
        return this;
    }
    public set sqlKillingTaskRespList(sqlKillingTaskRespList: Array<SqlKillingTaskResp>  | undefined) {
        this['sql_killing_task_resp_list'] = sqlKillingTaskRespList;
    }
    public get sqlKillingTaskRespList(): Array<SqlKillingTaskResp> | undefined {
        return this['sql_killing_task_resp_list'];
    }
}