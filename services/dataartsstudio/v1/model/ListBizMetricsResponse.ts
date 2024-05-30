import { ListBizMetricsResultData } from './ListBizMetricsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListBizMetricsResponse extends SdkResponse {
    public data?: ListBizMetricsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListBizMetricsResultData): ListBizMetricsResponse {
        this['data'] = data;
        return this;
    }
}