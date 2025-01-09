

export class MetricNotifyRule {
    private 'rule_id'?: string;
    private 'metric_name'?: string;
    public threshold?: number;
    private 'comparison_operator'?: string;
    public interval?: number;
    public enable?: boolean;
    private 'notify_object'?: string;
    public constructor() { 
    }
    public withRuleId(ruleId: string): MetricNotifyRule {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withMetricName(metricName: string): MetricNotifyRule {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withThreshold(threshold: number): MetricNotifyRule {
        this['threshold'] = threshold;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): MetricNotifyRule {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withInterval(interval: number): MetricNotifyRule {
        this['interval'] = interval;
        return this;
    }
    public withEnable(enable: boolean): MetricNotifyRule {
        this['enable'] = enable;
        return this;
    }
    public withNotifyObject(notifyObject: string): MetricNotifyRule {
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