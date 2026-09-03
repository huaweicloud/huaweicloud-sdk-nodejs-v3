import { BatchDeleteJobItem } from './BatchDeleteJobItem';


export class BatchDeleteJobsReq {
    public jobs?: Array<BatchDeleteJobItem>;
    public constructor(jobs?: Array<BatchDeleteJobItem>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<BatchDeleteJobItem>): BatchDeleteJobsReq {
        this['jobs'] = jobs;
        return this;
    }
}