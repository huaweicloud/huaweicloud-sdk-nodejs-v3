import { PoolMonitorMetricDimensions } from './PoolMonitorMetricDimensions';


export class PoolMonitorMetric {
    public dimensions?: Array<PoolMonitorMetricDimensions>;
    public metricName?: string;
    public namespace?: string;
    public constructor() { 
    }
    public withDimensions(dimensions: Array<PoolMonitorMetricDimensions>): PoolMonitorMetric {
        this['dimensions'] = dimensions;
        return this;
    }
    public withMetricName(metricName: string): PoolMonitorMetric {
        this['metricName'] = metricName;
        return this;
    }
    public withNamespace(namespace: string): PoolMonitorMetric {
        this['namespace'] = namespace;
        return this;
    }
}