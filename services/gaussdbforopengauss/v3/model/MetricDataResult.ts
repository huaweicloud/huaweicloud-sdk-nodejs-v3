import { DatapointResult } from './DatapointResult';


export class MetricDataResult {
    public metric?: string;
    public type?: MetricDataResultTypeEnum | string;
    public unit?: string;
    public datapoints?: Array<DatapointResult>;
    public timestamps?: Array<string>;
    public constructor(metric?: string, type?: string, unit?: string, datapoints?: Array<DatapointResult>, timestamps?: Array<string>) { 
        this['metric'] = metric;
        this['type'] = type;
        this['unit'] = unit;
        this['datapoints'] = datapoints;
        this['timestamps'] = timestamps;
    }
    public withMetric(metric: string): MetricDataResult {
        this['metric'] = metric;
        return this;
    }
    public withType(type: MetricDataResultTypeEnum | string): MetricDataResult {
        this['type'] = type;
        return this;
    }
    public withUnit(unit: string): MetricDataResult {
        this['unit'] = unit;
        return this;
    }
    public withDatapoints(datapoints: Array<DatapointResult>): MetricDataResult {
        this['datapoints'] = datapoints;
        return this;
    }
    public withTimestamps(timestamps: Array<string>): MetricDataResult {
        this['timestamps'] = timestamps;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetricDataResultTypeEnum {
    INSTANCE = 'INSTANCE',
    NODE = 'NODE',
    COMPONENT = 'COMPONENT'
}
