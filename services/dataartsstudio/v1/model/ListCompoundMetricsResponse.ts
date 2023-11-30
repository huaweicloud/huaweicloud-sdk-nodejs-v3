import { CompoundMetricVOSearchResultData } from './CompoundMetricVOSearchResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCompoundMetricsResponse extends SdkResponse {
    public data?: CompoundMetricVOSearchResultData;
    public constructor() { 
        super();
    }
    public withData(data: CompoundMetricVOSearchResultData): ListCompoundMetricsResponse {
        this['data'] = data;
        return this;
    }
}