import { MetricsWithTime } from './MetricsWithTime';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMetricsTrendResponse extends SdkResponse {
    public body?: Array<MetricsWithTime>;
    public constructor() { 
        super();
    }
    public withBody(body: Array<MetricsWithTime>): ListMetricsTrendResponse {
        this['body'] = body;
        return this;
    }
}