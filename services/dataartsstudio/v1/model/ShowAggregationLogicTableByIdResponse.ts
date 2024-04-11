import { AggregationLogicTableVODetailData } from './AggregationLogicTableVODetailData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAggregationLogicTableByIdResponse extends SdkResponse {
    public data?: AggregationLogicTableVODetailData;
    public constructor() { 
        super();
    }
    public withData(data: AggregationLogicTableVODetailData): ShowAggregationLogicTableByIdResponse {
        this['data'] = data;
        return this;
    }
}