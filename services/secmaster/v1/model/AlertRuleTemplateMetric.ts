

export class AlertRuleTemplateMetric {
    public activity?: number;
    public category?: AlertRuleTemplateMetricCategoryEnum | string;
    public metric?: { [key: string]: number; };
    public constructor(activity?: number, category?: string, metric?: { [key: string]: number; }) { 
        this['activity'] = activity;
        this['category'] = category;
        this['metric'] = metric;
    }
    public withActivity(activity: number): AlertRuleTemplateMetric {
        this['activity'] = activity;
        return this;
    }
    public withCategory(category: AlertRuleTemplateMetricCategoryEnum | string): AlertRuleTemplateMetric {
        this['category'] = category;
        return this;
    }
    public withMetric(metric: { [key: string]: number; }): AlertRuleTemplateMetric {
        this['metric'] = metric;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlertRuleTemplateMetricCategoryEnum {
    GROUP_COUNT = 'GROUP_COUNT'
}
