

export class SupportMetricNameListSupportMetricNames {
    private 'datastore_type'?: Array<string>;
    private 'metric_name'?: string;
    public unit?: string;
    public description?: string;
    public constructor() { 
    }
    public withDatastoreType(datastoreType: Array<string>): SupportMetricNameListSupportMetricNames {
        this['datastore_type'] = datastoreType;
        return this;
    }
    public set datastoreType(datastoreType: Array<string>  | undefined) {
        this['datastore_type'] = datastoreType;
    }
    public get datastoreType(): Array<string> | undefined {
        return this['datastore_type'];
    }
    public withMetricName(metricName: string): SupportMetricNameListSupportMetricNames {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withUnit(unit: string): SupportMetricNameListSupportMetricNames {
        this['unit'] = unit;
        return this;
    }
    public withDescription(description: string): SupportMetricNameListSupportMetricNames {
        this['description'] = description;
        return this;
    }
}