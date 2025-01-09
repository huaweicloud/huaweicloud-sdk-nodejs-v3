import { Metric } from './Metric';


export class MetricsWithTime {
    public time?: string;
    public metrics?: Array<Metric>;
    public constructor() { 
    }
    public withTime(time: string): MetricsWithTime {
        this['time'] = time;
        return this;
    }
    public withMetrics(metrics: Array<Metric>): MetricsWithTime {
        this['metrics'] = metrics;
        return this;
    }
}