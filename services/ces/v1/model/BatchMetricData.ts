import { DatapointForBatchMetric } from './DatapointForBatchMetric';
import { MetricsDimension } from './MetricsDimension';


export class BatchMetricData {
    public unit?: string;
    public datapoints?: Array<DatapointForBatchMetric>;
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<MetricsDimension>;
    public constructor(datapoints?: Array<DatapointForBatchMetric>, metricName?: string) { 
        this['datapoints'] = datapoints;
        this['metric_name'] = metricName;
    }
    public withUnit(unit: string): BatchMetricData {
        this['unit'] = unit;
        return this;
    }
    public withDatapoints(datapoints: Array<DatapointForBatchMetric>): BatchMetricData {
        this['datapoints'] = datapoints;
        return this;
    }
    public withNamespace(namespace: string): BatchMetricData {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): BatchMetricData {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<MetricsDimension>): BatchMetricData {
        this['dimensions'] = dimensions;
        return this;
    }
}