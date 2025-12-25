import { ListAlertRuleTemplateMetricsResponseBodySeverityMetric } from './ListAlertRuleTemplateMetricsResponseBodySeverityMetric';


export class ListAlertRuleTemplateMetricsResponseBodySeverity {
    public metric?: ListAlertRuleTemplateMetricsResponseBodySeverityMetric;
    public category?: string;
    public constructor() { 
    }
    public withMetric(metric: ListAlertRuleTemplateMetricsResponseBodySeverityMetric): ListAlertRuleTemplateMetricsResponseBodySeverity {
        this['metric'] = metric;
        return this;
    }
    public withCategory(category: string): ListAlertRuleTemplateMetricsResponseBodySeverity {
        this['category'] = category;
        return this;
    }
}