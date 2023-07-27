

export class ListMetricDataRequest {
    private 'instance_id'?: string;
    public dim?: ListMetricDataRequestDimEnum | string;
    private 'metric_name'?: ListMetricDataRequestMetricNameEnum | string;
    public from?: string;
    public to?: string;
    public period?: ListMetricDataRequestPeriodEnum | number;
    public filter?: ListMetricDataRequestFilterEnum | string;
    public constructor(instanceId?: string, dim?: string, metricName?: string, from?: string, to?: string, period?: number, filter?: string) { 
        this['instance_id'] = instanceId;
        this['dim'] = dim;
        this['metric_name'] = metricName;
        this['from'] = from;
        this['to'] = to;
        this['period'] = period;
        this['filter'] = filter;
    }
    public withInstanceId(instanceId: string): ListMetricDataRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDim(dim: ListMetricDataRequestDimEnum | string): ListMetricDataRequest {
        this['dim'] = dim;
        return this;
    }
    public withMetricName(metricName: ListMetricDataRequestMetricNameEnum | string): ListMetricDataRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: ListMetricDataRequestMetricNameEnum | string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): ListMetricDataRequestMetricNameEnum | string | undefined {
        return this['metric_name'];
    }
    public withFrom(from: string): ListMetricDataRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ListMetricDataRequest {
        this['to'] = to;
        return this;
    }
    public withPeriod(period: ListMetricDataRequestPeriodEnum | number): ListMetricDataRequest {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: ListMetricDataRequestFilterEnum | string): ListMetricDataRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListMetricDataRequestDimEnum {
    INBOUND_EIP = 'inbound_eip',
    OUTBOUND_EIP = 'outbound_eip'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMetricDataRequestMetricNameEnum {
    UPSTREAM_BANDWIDTH = 'upstream_bandwidth',
    DOWNSTREAM_BANDWIDTH = 'downstream_bandwidth',
    UPSTREAM_BANDWIDTH_USAGE = 'upstream_bandwidth_usage',
    DOWNSTREAM_BANDWIDTH_USAGE = 'downstream_bandwidth_usage',
    UP_STREAM = 'up_stream',
    DOWN_STREAM = 'down_stream'
}
/**
    * @export
    * @enum {string}
    */
export enum ListMetricDataRequestPeriodEnum {
    NUMBER_1 = 1,
    NUMBER_300 = 300,
    NUMBER_1200 = 1200,
    NUMBER_3600 = 3600,
    NUMBER_14400 = 14400,
    NUMBER_86400 = 86400
}
/**
    * @export
    * @enum {string}
    */
export enum ListMetricDataRequestFilterEnum {
    AVERAGE = 'average',
    MAX = 'max',
    MIN = 'min',
    SUM = 'sum',
    VARIANCE = 'variance'
}
