import { ExceptionMetricData } from './ExceptionMetricData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListExceptionMetricsResponse extends SdkResponse {
    public metrics?: Array<ExceptionMetricData>;
    public constructor() { 
        super();
    }
    public withMetrics(metrics: Array<ExceptionMetricData>): ListExceptionMetricsResponse {
        this['metrics'] = metrics;
        return this;
    }
}