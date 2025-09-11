import { MetricDataPointDimensions } from './MetricDataPointDimensions';


export class MetricDataPoint {
    public dimensions?: Array<MetricDataPointDimensions>;
    public timestamp?: number;
    public value?: number;
    public unit?: string;
    public constructor() { 
    }
    public withDimensions(dimensions: Array<MetricDataPointDimensions>): MetricDataPoint {
        this['dimensions'] = dimensions;
        return this;
    }
    public withTimestamp(timestamp: number): MetricDataPoint {
        this['timestamp'] = timestamp;
        return this;
    }
    public withValue(value: number): MetricDataPoint {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): MetricDataPoint {
        this['unit'] = unit;
        return this;
    }
}