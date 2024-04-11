import { AggregationLogicTableVODetailData } from './AggregationLogicTableVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateDesignAggregationLogicTableResponse extends SdkResponse {
    public data?: AggregationLogicTableVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: AggregationLogicTableVODetailData): CreateDesignAggregationLogicTableResponse {
        this['data'] = data;
        return this;
    }
}