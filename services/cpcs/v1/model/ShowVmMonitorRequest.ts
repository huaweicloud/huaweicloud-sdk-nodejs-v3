

export class ShowVmMonitorRequest {
    public namespace?: ShowVmMonitorRequestNamespaceEnum | string;
    private 'metric_name'?: ShowVmMonitorRequestMetricNameEnum | string;
    private 'instance_id'?: string;
    private 'vsm_id'?: string;
    public from?: number;
    public to?: number;
    public period?: number;
    public filter?: string;
    public constructor(namespace?: string, metricName?: string) { 
        this['namespace'] = namespace;
        this['metric_name'] = metricName;
    }
    public withNamespace(namespace: ShowVmMonitorRequestNamespaceEnum | string): ShowVmMonitorRequest {
        this['namespace'] = namespace;
        return this;
    }
    public withMetricName(metricName: ShowVmMonitorRequestMetricNameEnum | string): ShowVmMonitorRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: ShowVmMonitorRequestMetricNameEnum | string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): ShowVmMonitorRequestMetricNameEnum | string | undefined {
        return this['metric_name'];
    }
    public withInstanceId(instanceId: string): ShowVmMonitorRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withVsmId(vsmId: string): ShowVmMonitorRequest {
        this['vsm_id'] = vsmId;
        return this;
    }
    public set vsmId(vsmId: string  | undefined) {
        this['vsm_id'] = vsmId;
    }
    public get vsmId(): string | undefined {
        return this['vsm_id'];
    }
    public withFrom(from: number): ShowVmMonitorRequest {
        this['from'] = from;
        return this;
    }
    public withTo(to: number): ShowVmMonitorRequest {
        this['to'] = to;
        return this;
    }
    public withPeriod(period: number): ShowVmMonitorRequest {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): ShowVmMonitorRequest {
        this['filter'] = filter;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowVmMonitorRequestNamespaceEnum {
    ECS = 'ECS',
    DHSM = 'DHSM'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowVmMonitorRequestMetricNameEnum {
    MEM_UTIL = 'mem_util',
    CPU_UTTL = 'cpu_uttl',
    NETWORK_OUTGOING_BYTES_RATE_INBAND = 'network_outgoing_bytes_rate_inband'
}
