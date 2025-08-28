import { MultiNodesSingleMetricMetrics } from './MultiNodesSingleMetricMetrics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceMultiNodesSingleMetricResponse extends SdkResponse {
    private 'metric_name'?: string;
    public unit?: string;
    public metrics?: Array<MultiNodesSingleMetricMetrics>;
    public constructor() { 
        super();
    }
    public withMetricName(metricName: string): ListInstanceMultiNodesSingleMetricResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withUnit(unit: string): ListInstanceMultiNodesSingleMetricResponse {
        this['unit'] = unit;
        return this;
    }
    public withMetrics(metrics: Array<MultiNodesSingleMetricMetrics>): ListInstanceMultiNodesSingleMetricResponse {
        this['metrics'] = metrics;
        return this;
    }
}