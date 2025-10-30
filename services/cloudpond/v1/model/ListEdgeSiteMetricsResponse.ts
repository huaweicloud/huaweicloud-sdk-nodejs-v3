import { MetricDataDetail } from './MetricDataDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEdgeSiteMetricsResponse extends SdkResponse {
    private 'metric_data'?: Array<MetricDataDetail>;
    public constructor() { 
        super();
    }
    public withMetricData(metricData: Array<MetricDataDetail>): ListEdgeSiteMetricsResponse {
        this['metric_data'] = metricData;
        return this;
    }
    public set metricData(metricData: Array<MetricDataDetail>  | undefined) {
        this['metric_data'] = metricData;
    }
    public get metricData(): Array<MetricDataDetail> | undefined {
        return this['metric_data'];
    }
}