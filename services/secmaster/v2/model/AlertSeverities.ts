import { MetricMap } from './MetricMap';


export class AlertSeverities {
    private 'severity_category'?: AlertSeveritiesSeverityCategoryEnum | string;
    public metric?: MetricMap;
    public constructor() { 
    }
    public withSeverityCategory(severityCategory: AlertSeveritiesSeverityCategoryEnum | string): AlertSeverities {
        this['severity_category'] = severityCategory;
        return this;
    }
    public set severityCategory(severityCategory: AlertSeveritiesSeverityCategoryEnum | string  | undefined) {
        this['severity_category'] = severityCategory;
    }
    public get severityCategory(): AlertSeveritiesSeverityCategoryEnum | string | undefined {
        return this['severity_category'];
    }
    public withMetric(metric: MetricMap): AlertSeverities {
        this['metric'] = metric;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlertSeveritiesSeverityCategoryEnum {
    SEVERITY = 'SEVERITY'
}
