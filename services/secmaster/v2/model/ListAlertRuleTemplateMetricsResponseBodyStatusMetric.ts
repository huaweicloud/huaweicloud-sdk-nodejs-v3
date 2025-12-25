

export class ListAlertRuleTemplateMetricsResponseBodyStatusMetric {
    public activity?: number;
    private 'ENABLED'?: number;
    private 'DISABLED'?: number;
    public constructor() { 
    }
    public withActivity(activity: number): ListAlertRuleTemplateMetricsResponseBodyStatusMetric {
        this['activity'] = activity;
        return this;
    }
    public withEnabled(enabled: number): ListAlertRuleTemplateMetricsResponseBodyStatusMetric {
        this['ENABLED'] = enabled;
        return this;
    }
    public set enabled(enabled: number  | undefined) {
        this['ENABLED'] = enabled;
    }
    public get enabled(): number | undefined {
        return this['ENABLED'];
    }
    public withDisabled(disabled: number): ListAlertRuleTemplateMetricsResponseBodyStatusMetric {
        this['DISABLED'] = disabled;
        return this;
    }
    public set disabled(disabled: number  | undefined) {
        this['DISABLED'] = disabled;
    }
    public get disabled(): number | undefined {
        return this['DISABLED'];
    }
}