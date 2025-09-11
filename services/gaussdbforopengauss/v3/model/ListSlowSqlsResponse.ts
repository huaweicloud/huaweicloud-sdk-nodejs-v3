import { SlowSQLInfoResult } from './SlowSQLInfoResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowSqlsResponse extends SdkResponse {
    public total?: number;
    private 'slow_sql_infos'?: Array<SlowSQLInfoResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSlowSqlsResponse {
        this['total'] = total;
        return this;
    }
    public withSlowSqlInfos(slowSqlInfos: Array<SlowSQLInfoResult>): ListSlowSqlsResponse {
        this['slow_sql_infos'] = slowSqlInfos;
        return this;
    }
    public set slowSqlInfos(slowSqlInfos: Array<SlowSQLInfoResult>  | undefined) {
        this['slow_sql_infos'] = slowSqlInfos;
    }
    public get slowSqlInfos(): Array<SlowSQLInfoResult> | undefined {
        return this['slow_sql_infos'];
    }
}