import { Filter } from './Filter';
import { MetricInfo } from './MetricInfo';


export class BatchListMetricDataRequestBody {
    public metrics?: Array<MetricInfo>;
    public period?: BatchListMetricDataRequestBodyPeriodEnum | string;
    public filter?: Filter;
    public from?: number;
    public to?: number;
    public constructor(metrics?: Array<MetricInfo>, period?: string, filter?: Filter, from?: number, to?: number) { 
        this['metrics'] = metrics;
        this['period'] = period;
        this['filter'] = filter;
        this['from'] = from;
        this['to'] = to;
    }
    public withMetrics(metrics: Array<MetricInfo>): BatchListMetricDataRequestBody {
        this['metrics'] = metrics;
        return this;
    }
    public withPeriod(period: BatchListMetricDataRequestBodyPeriodEnum | string): BatchListMetricDataRequestBody {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: Filter): BatchListMetricDataRequestBody {
        this['filter'] = filter;
        return this;
    }
    public withFrom(from: number): BatchListMetricDataRequestBody {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): BatchListMetricDataRequestBody {
        this['to'] = to;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum BatchListMetricDataRequestBodyPeriodEnum {
    E_1 = '1',
    E_60 = '60',
    E_300 = '300',
    E_1200 = '1200',
    E_3600 = '3600',
    E_14400 = '14400',
    E_86400 = '86400'
}
