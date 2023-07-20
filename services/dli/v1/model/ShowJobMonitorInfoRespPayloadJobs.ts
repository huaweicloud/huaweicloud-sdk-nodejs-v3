import { ShowJobMonitorInfoRespPayloadJobsMetrics } from './ShowJobMonitorInfoRespPayloadJobsMetrics';


export class ShowJobMonitorInfoRespPayloadJobs {
    private 'job_id'?: number;
    public metrics?: ShowJobMonitorInfoRespPayloadJobsMetrics;
    public constructor() { 
    }
    public withJobId(jobId: number): ShowJobMonitorInfoRespPayloadJobs {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: number  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): number | undefined {
        return this['job_id'];
    }
    public withMetrics(metrics: ShowJobMonitorInfoRespPayloadJobsMetrics): ShowJobMonitorInfoRespPayloadJobs {
        this['metrics'] = metrics;
        return this;
    }
}