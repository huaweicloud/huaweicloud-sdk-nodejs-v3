

export class ApiSetMetricCodeThresholdReq {
    private 'metric_code'?: string;
    private 'datastore_type'?: string;
    private 'new_threshold'?: number;
    public constructor(metricCode?: string, datastoreType?: string, newThreshold?: number) { 
        this['metric_code'] = metricCode;
        this['datastore_type'] = datastoreType;
        this['new_threshold'] = newThreshold;
    }
    public withMetricCode(metricCode: string): ApiSetMetricCodeThresholdReq {
        this['metric_code'] = metricCode;
        return this;
    }
    public set metricCode(metricCode: string  | undefined) {
        this['metric_code'] = metricCode;
    }
    public get metricCode(): string | undefined {
        return this['metric_code'];
    }
    public withDatastoreType(datastoreType: string): ApiSetMetricCodeThresholdReq {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: string  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): string | undefined {
        return this['datastore_type'];
    }
    public withNewThreshold(newThreshold: number): ApiSetMetricCodeThresholdReq {
        this['new_threshold'] = newThreshold;
        return this;
    }
    public set newThreshold(newThreshold: number  | undefined) {
        this['new_threshold'] = newThreshold;
    }
    public get newThreshold(): number | undefined {
        return this['new_threshold'];
    }
}