import { FlinkMetricList } from './FlinkMetricList';


export class FlinkMetric {
    public jobs?: Array<FlinkMetricList>;
    public constructor() { 
    }
    public withJobs(jobs: Array<FlinkMetricList>): FlinkMetric {
        this['jobs'] = jobs;
        return this;
    }
}