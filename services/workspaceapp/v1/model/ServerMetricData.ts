import { ServerDataPoints } from './ServerDataPoints';


export class ServerMetricData {
    private 'metric_name'?: string;
    public datapoints?: Array<ServerDataPoints>;
    private 'dimension_value'?: string;
    public constructor() { 
    }
    public withMetricName(metricName: string): ServerMetricData {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withDatapoints(datapoints: Array<ServerDataPoints>): ServerMetricData {
        this['datapoints'] = datapoints;
        return this;
    }
    public withDimensionValue(dimensionValue: string): ServerMetricData {
        this['dimension_value'] = dimensionValue;
        return this;
    }
    public set dimensionValue(dimensionValue: string  | undefined) {
        this['dimension_value'] = dimensionValue;
    }
    public get dimensionValue(): string | undefined {
        return this['dimension_value'];
    }
}