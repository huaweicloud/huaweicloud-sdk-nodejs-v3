import { BatchMetricData } from './BatchMetricData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListMetricDataResponse extends SdkResponse {
    public metrics?: Array<BatchMetricData>;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<BatchMetricData>): BatchListMetricDataResponse {
        this['metrics'] = metrics;
        return this;
    }
}