import { MetricsInfo } from './MetricsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodeMetricsResponse extends SdkResponse {
    public metrics?: Array<MetricsInfo>;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<MetricsInfo>): ShowNodeMetricsResponse {
        this['metrics'] = metrics;
        return this;
    }
}