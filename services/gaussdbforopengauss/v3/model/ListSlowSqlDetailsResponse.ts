import { SlowSqlDetailResult } from './SlowSqlDetailResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSlowSqlDetailsResponse extends SdkResponse {
    public total?: number;
    private 'slow_sql_details'?: Array<SlowSqlDetailResult>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListSlowSqlDetailsResponse {
        this['total'] = total;
        return this;
    }
    public withSlowSqlDetails(slowSqlDetails: Array<SlowSqlDetailResult>): ListSlowSqlDetailsResponse {
        this['slow_sql_details'] = slowSqlDetails;
        return this;
    }
    public set slowSqlDetails(slowSqlDetails: Array<SlowSqlDetailResult>  | undefined) {
        this['slow_sql_details'] = slowSqlDetails;
    }
    public get slowSqlDetails(): Array<SlowSqlDetailResult> | undefined {
        return this['slow_sql_details'];
    }
}