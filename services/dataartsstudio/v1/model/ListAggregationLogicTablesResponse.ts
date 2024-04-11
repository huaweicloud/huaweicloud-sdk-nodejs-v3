import { AggregationLogicTableVOSearchResultData } from './AggregationLogicTableVOSearchResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAggregationLogicTablesResponse extends SdkResponse {
    public data?: AggregationLogicTableVOSearchResultData;
    public constructor() { 
        super();
    }
    public withData(data: AggregationLogicTableVOSearchResultData): ListAggregationLogicTablesResponse {
        this['data'] = data;
        return this;
    }
}