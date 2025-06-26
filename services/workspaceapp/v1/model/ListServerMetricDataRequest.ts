

export class ListServerMetricDataRequest {
    private 'server_id'?: string;
    public namespace?: string;
    private 'metric_name'?: string;
    public from?: string;
    public to?: string;
    public period?: number;
    public filter?: string;
    public constructor(serverId?: string, namespace?: string, metricName?: string, from?: string, to?: string, period?: number, filter?: string) { 
        this['server_id'] = serverId;
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
        this['from'] = from;
        this['to'] = to;
        this['period'] = period;
        this['filter'] = filter;
    }
    public withServerId(serverId: string): ListServerMetricDataRequest {
        this['server_id'] = serverId;
        return this;
    }
    public set serverId(serverId: string  | undefined) {
        this['server_id'] = serverId;
    }
    public get serverId(): string | undefined {
        return this['server_id'];
    }
    public withNamespace(namespace: string): ListServerMetricDataRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: string): ListServerMetricDataRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withFrom(from: string): ListServerMetricDataRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: string): ListServerMetricDataRequest {
        this['to'] = to;
        return this;
    }
    public withPeriod(period: number): ListServerMetricDataRequest {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): ListServerMetricDataRequest {
        this['filter'] = filter;
        return this;
    }
}