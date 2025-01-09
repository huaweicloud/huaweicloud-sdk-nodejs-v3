

export class ListMetricsTrendRequest {
    private 'start_time'?: string;
    private 'end_time'?: string;
    public dim?: string;
    private 'metric_names'?: Array<string>;
    public period?: ListMetricsTrendRequestPeriodEnum | string;
    public constructor(startTime?: string, endTime?: string, metricNames?: Array<string>) { 
        this['start_time'] = startTime;
        this['end_time'] = endTime;
        this['metric_names'] = metricNames;
    }
    public withStartTime(startTime: string): ListMetricsTrendRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListMetricsTrendRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDim(dim: string): ListMetricsTrendRequest {
        this['dim'] = dim;
        return this;
    }
    public withMetricNames(metricNames: Array<string>): ListMetricsTrendRequest {
        this['metric_names'] = metricNames;
        return this;
    }
    public set metricNames(metricNames: Array<string>  | undefined) {
        this['metric_names'] = metricNames;
    }
    public get metricNames(): Array<string> | undefined {
        return this['metric_names'];
    }
    public withPeriod(period: ListMetricsTrendRequestPeriodEnum | string): ListMetricsTrendRequest {
        this['period'] = period;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMetricsTrendRequestPeriodEnum {
    MIN = 'MIN',
    E_5MIN = '5MIN',
    DAY = 'DAY',
    HOUR = 'HOUR'
}
