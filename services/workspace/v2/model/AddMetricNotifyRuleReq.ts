

export class AddMetricNotifyRuleReq {
    private 'metric_name'?: string;
    public threshold?: number;
    private 'comparison_operator'?: string;
    public interval?: number;
    public enable?: boolean;
    private 'notify_object'?: string;
    public constructor(metricName?: string, comparisonOperator?: string, enable?: boolean, notifyObject?: string) { 
        this['metric_name'] = metricName;
        this['comparison_operator'] = comparisonOperator;
        this['enable'] = enable;
        this['notify_object'] = notifyObject;
    }
    public withMetricName(metricName: string): AddMetricNotifyRuleReq {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withThreshold(threshold: number): AddMetricNotifyRuleReq {
        this['threshold'] = threshold;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): AddMetricNotifyRuleReq {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withInterval(interval: number): AddMetricNotifyRuleReq {
        this['interval'] = interval;
        return this;
    }
    public withEnable(enable: boolean): AddMetricNotifyRuleReq {
        this['enable'] = enable;
        return this;
    }
    public withNotifyObject(notifyObject: string): AddMetricNotifyRuleReq {
        this['notify_object'] = notifyObject;
        return this;
    }
    public set notifyObject(notifyObject: string  | undefined) {
        this['notify_object'] = notifyObject;
    }
    public get notifyObject(): string | undefined {
        return this['notify_object'];
    }
}