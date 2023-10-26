import { MetricDataPoints } from './MetricDataPoints';
import { MetricQueryMeritcParam } from './MetricQueryMeritcParam';


export class MetricDataValue {
    public dataPoints?: Array<MetricDataPoints>;
    public metric?: MetricQueryMeritcParam;
    public constructor() { 
    }
    public withDataPoints(dataPoints: Array<MetricDataPoints>): MetricDataValue {
        this['dataPoints'] = dataPoints;
        return this;
    }
    public withMetric(metric: MetricQueryMeritcParam): MetricDataValue {
        this['metric'] = metric;
        return this;
    }
}