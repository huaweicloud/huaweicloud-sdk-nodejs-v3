import { BatchPeriod } from './BatchPeriod';
import { Filter } from './Filter';
import { MetricInfo } from './MetricInfo';


export class BatchListMetricDataRequestBody {
    public metrics?: Array<MetricInfo>;
    public period?: BatchPeriod;
    public filter?: Filter;
    public from?: number;
    public to?: number;
    public constructor(metrics?: Array<MetricInfo>, period?: BatchPeriod, filter?: Filter, from?: number, to?: number) { 
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
    public withPeriod(period: BatchPeriod): BatchListMetricDataRequestBody {
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