

export class ListMetricNotifyRuleRequest {
    private 'metric_name'?: string;
    private 'rule_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withMetricName(metricName: string): ListMetricNotifyRuleRequest {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withRuleId(ruleId: string): ListMetricNotifyRuleRequest {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string  | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId(): string | undefined {
        return this['rule_id'];
    }
    public withOffset(offset: number): ListMetricNotifyRuleRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListMetricNotifyRuleRequest {
        this['limit'] = limit;
        return this;
    }
}