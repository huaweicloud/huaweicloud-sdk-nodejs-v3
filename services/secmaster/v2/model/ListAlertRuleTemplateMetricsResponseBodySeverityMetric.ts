

export class ListAlertRuleTemplateMetricsResponseBodySeverityMetric {
    private 'HIGH'?: number;
    private 'TIPS'?: number;
    private 'FATAL'?: number;
    private 'LOW'?: number;
    private 'MEDIUM'?: number;
    public constructor() { 
    }
    public withHigh(high: number): ListAlertRuleTemplateMetricsResponseBodySeverityMetric {
        this['HIGH'] = high;
        return this;
    }
    public set high(high: number  | undefined) {
        this['HIGH'] = high;
    }
    public get high(): number | undefined {
        return this['HIGH'];
    }
    public withTips(tips: number): ListAlertRuleTemplateMetricsResponseBodySeverityMetric {
        this['TIPS'] = tips;
        return this;
    }
    public set tips(tips: number  | undefined) {
        this['TIPS'] = tips;
    }
    public get tips(): number | undefined {
        return this['TIPS'];
    }
    public withFatal(fatal: number): ListAlertRuleTemplateMetricsResponseBodySeverityMetric {
        this['FATAL'] = fatal;
        return this;
    }
    public set fatal(fatal: number  | undefined) {
        this['FATAL'] = fatal;
    }
    public get fatal(): number | undefined {
        return this['FATAL'];
    }
    public withLow(low: number): ListAlertRuleTemplateMetricsResponseBodySeverityMetric {
        this['LOW'] = low;
        return this;
    }
    public set low(low: number  | undefined) {
        this['LOW'] = low;
    }
    public get low(): number | undefined {
        return this['LOW'];
    }
    public withMedium(medium: number): ListAlertRuleTemplateMetricsResponseBodySeverityMetric {
        this['MEDIUM'] = medium;
        return this;
    }
    public set medium(medium: number  | undefined) {
        this['MEDIUM'] = medium;
    }
    public get medium(): number | undefined {
        return this['MEDIUM'];
    }
}