import { StatusMetric } from './StatusMetric';


export class MetricsStatus {
    private 'metrics_category'?: MetricsStatusMetricsCategoryEnum | string;
    private 'status_metric'?: StatusMetric;
    public constructor() { 
    }
    public withMetricsCategory(metricsCategory: MetricsStatusMetricsCategoryEnum | string): MetricsStatus {
        this['metrics_category'] = metricsCategory;
        return this;
    }
    public set metricsCategory(metricsCategory: MetricsStatusMetricsCategoryEnum | string  | undefined) {
        this['metrics_category'] = metricsCategory;
    }
    public get metricsCategory(): MetricsStatusMetricsCategoryEnum | string | undefined {
        return this['metrics_category'];
    }
    public withStatusMetric(statusMetric: StatusMetric): MetricsStatus {
        this['status_metric'] = statusMetric;
        return this;
    }
    public set statusMetric(statusMetric: StatusMetric  | undefined) {
        this['status_metric'] = statusMetric;
    }
    public get statusMetric(): StatusMetric | undefined {
        return this['status_metric'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum MetricsStatusMetricsCategoryEnum {
    STATUS = 'STATUS'
}
