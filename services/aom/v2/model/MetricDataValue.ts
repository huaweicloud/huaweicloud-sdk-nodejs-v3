import { MetricDataPoints } from './MetricDataPoints';
import { MetricQueryMetricParam } from './MetricQueryMetricParam';


export class MetricDataValue {
    public dataPoints?: Array<MetricDataPoints>;
    public metric?: MetricQueryMetricParam;
    public constructor() { 
    }
    public withDataPoints(dataPoints: Array<MetricDataPoints>): MetricDataValue {
        this['dataPoints'] = dataPoints;
        return this;
    }
    public withMetric(metric: MetricQueryMetricParam): MetricDataValue {
        this['metric'] = metric;
        return this;
    }
}