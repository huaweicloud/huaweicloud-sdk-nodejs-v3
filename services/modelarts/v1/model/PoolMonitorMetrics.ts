import { PoolMonitorDataPoints } from './PoolMonitorDataPoints';
import { PoolMonitorMetric } from './PoolMonitorMetric';


export class PoolMonitorMetrics {
    public metric?: PoolMonitorMetric;
    public dataPoints?: Array<PoolMonitorDataPoints>;
    public constructor() { 
    }
    public withMetric(metric: PoolMonitorMetric): PoolMonitorMetrics {
        this['metric'] = metric;
        return this;
    }
    public withDataPoints(dataPoints: Array<PoolMonitorDataPoints>): PoolMonitorMetrics {
        this['dataPoints'] = dataPoints;
        return this;
    }
}