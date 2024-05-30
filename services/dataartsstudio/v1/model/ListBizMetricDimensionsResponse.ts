import { ListBizMetricDimensionsResultData } from './ListBizMetricDimensionsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBizMetricDimensionsResponse extends SdkResponse {
    public data?: ListBizMetricDimensionsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListBizMetricDimensionsResultData): ListBizMetricDimensionsResponse {
        this['data'] = data;
        return this;
    }
}