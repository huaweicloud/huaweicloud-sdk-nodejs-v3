import { MetricObject } from './MetricObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTrainingJobMetricsResponse extends SdkResponse {
    public metrics?: Array<MetricObject>;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<MetricObject>): ShowTrainingJobMetricsResponse {
        this['metrics'] = metrics;
        return this;
    }
}