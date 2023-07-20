

export class BatchDeleteJobReq {
    public jobs?: Array<string>;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchDeleteJobReq {
        this['jobs'] = jobs;
        return this;
    }
}