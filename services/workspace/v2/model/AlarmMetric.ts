import { AlarmMetricDimension } from './AlarmMetricDimension';


export class AlarmMetric {
    public namespace?: string;
    private 'metric_name'?: string;
    public dimensions?: Array<AlarmMetricDimension>;
    public constructor() { 
    }
    public withNamespace(namespace: string): AlarmMetric {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): AlarmMetric {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDimensions(dimensions: Array<AlarmMetricDimension>): AlarmMetric {
        this['dimensions'] = dimensions;
        return this;
    }
}