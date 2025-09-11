import { MetricDataPoint } from './MetricDataPoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchListSpecifiedMetricDataResponse extends SdkResponse {
    public namespace?: string;
    private 'metric_name'?: string;
    private 'metric_dimension'?: string;
    private 'data_points'?: Array<MetricDataPoint>;
    public constructor() { 
        super();
    }
    public withNamespace(namespace: string): BatchListSpecifiedMetricDataResponse {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): BatchListSpecifiedMetricDataResponse {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withMetricDimension(metricDimension: string): BatchListSpecifiedMetricDataResponse {
        this['metric_dimension'] = metricDimension;
        return this;
    }
    public set metricDimension(metricDimension: string  | undefined) {
        this['metric_dimension'] = metricDimension;
    }
    public get metricDimension(): string | undefined {
        return this['metric_dimension'];
    }
    public withDataPoints(dataPoints: Array<MetricDataPoint>): BatchListSpecifiedMetricDataResponse {
        this['data_points'] = dataPoints;
        return this;
    }
    public set dataPoints(dataPoints: Array<MetricDataPoint>  | undefined) {
        this['data_points'] = dataPoints;
    }
    public get dataPoints(): Array<MetricDataPoint> | undefined {
        return this['data_points'];
    }
}