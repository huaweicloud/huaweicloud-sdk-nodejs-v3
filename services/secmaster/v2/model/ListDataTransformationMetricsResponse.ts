import { Object1Map } from './Object1Map';
import { Object2Map } from './Object2Map';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDataTransformationMetricsResponse extends SdkResponse {
    public status?: Object1Map;
    public usage?: Object2Map;
    public constructor() { 
        super();
    }
    public withStatus(status: Object1Map): ListDataTransformationMetricsResponse {
        this['status'] = status;
        return this;
    }
    public withUsage(usage: Object2Map): ListDataTransformationMetricsResponse {
        this['usage'] = usage;
        return this;
    }
}