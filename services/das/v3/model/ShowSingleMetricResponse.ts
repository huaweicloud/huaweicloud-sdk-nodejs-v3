import { MetricDataItem } from './MetricDataItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSingleMetricResponse extends SdkResponse {
    private 'metric_name'?: string;
    public unit?: string;
    public metrics?: Array<MetricDataItem>;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ShowSingleMetricResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withUnit(unit: string): ShowSingleMetricResponse {
        this['unit'] = unit;
        return this;
    }
    public withMetrics(metrics: Array<MetricDataItem>): ShowSingleMetricResponse {
        this['metrics'] = metrics;
        return this;
    }
}