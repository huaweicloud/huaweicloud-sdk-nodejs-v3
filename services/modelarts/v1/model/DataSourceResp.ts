import { JobSummaryResp } from './JobSummaryResp';


export class DataSourceResp {
    public job?: JobSummaryResp;
    public constructor(job?: JobSummaryResp) { 
        this['job'] = job;
    }
    public withJob(job: JobSummaryResp): DataSourceResp {
        this['job'] = job;
        return this;
    }
}