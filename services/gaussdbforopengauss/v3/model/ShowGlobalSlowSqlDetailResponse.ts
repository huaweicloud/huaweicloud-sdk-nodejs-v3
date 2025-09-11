import { SlowSqlDetailResult } from './SlowSqlDetailResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGlobalSlowSqlDetailResponse extends SdkResponse {
    private 'slow_sql_details'?: Array<SlowSqlDetailResult>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withSlowSqlDetails(slowSqlDetails: Array<SlowSqlDetailResult>): ShowGlobalSlowSqlDetailResponse {
        this['slow_sql_details'] = slowSqlDetails;
        return this;
    }
    public set slowSqlDetails(slowSqlDetails: Array<SlowSqlDetailResult>  | undefined) {
        this['slow_sql_details'] = slowSqlDetails;
    }
    public get slowSqlDetails(): Array<SlowSqlDetailResult> | undefined {
        return this['slow_sql_details'];
    }
    public withTotal(total: number): ShowGlobalSlowSqlDetailResponse {
        this['total'] = total;
        return this;
    }
}