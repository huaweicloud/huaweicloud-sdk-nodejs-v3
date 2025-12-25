import { ListAlertRuleTemplateMetricsResponseBodyStatusMetric } from './ListAlertRuleTemplateMetricsResponseBodyStatusMetric';


export class ListAlertRuleTemplateMetricsResponseBodyStatus {
    public metric?: ListAlertRuleTemplateMetricsResponseBodyStatusMetric;
    public category?: string;
    public constructor() { 
    }
    public withMetric(metric: ListAlertRuleTemplateMetricsResponseBodyStatusMetric): ListAlertRuleTemplateMetricsResponseBodyStatus {
        this['metric'] = metric;
        return this;
    }
    public withCategory(category: string): ListAlertRuleTemplateMetricsResponseBodyStatus {
        this['category'] = category;
        return this;
    }
}