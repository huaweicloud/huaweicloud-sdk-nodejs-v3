import { AlarmHistoryItemV2MetricDimensions } from './AlarmHistoryItemV2MetricDimensions';


export class AlarmHistoryItemV2Metric {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<AlarmHistoryItemV2MetricDimensions>;
    public constructor() { 
    }
    public withNamespace(namespace: string): AlarmHistoryItemV2Metric {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): AlarmHistoryItemV2Metric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<AlarmHistoryItemV2MetricDimensions>): AlarmHistoryItemV2Metric {
        this['dimensions'] = dimensions;
        return this;
    }
}