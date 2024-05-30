import { ListMetricRelationsResultData } from './ListMetricRelationsResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricRelationsResponse extends SdkResponse {
    public data?: ListMetricRelationsResultData;
    public constructor() { 
        super();
    }
    public withData(data: ListMetricRelationsResultData): ListMetricRelationsResponse {
        this['data'] = data;
        return this;
    }
}