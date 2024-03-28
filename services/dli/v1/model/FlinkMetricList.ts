import { Metric } from './Metric';


export class FlinkMetricList {
    private 'job_id'?: number;
    public metrics?: Metric;
    public constructor() { 
    }
    public withJobId(jobId: number): FlinkMetricList {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withMetrics(metrics: Metric): FlinkMetricList {
        this['metrics'] = metrics;
        return this;
    }
}