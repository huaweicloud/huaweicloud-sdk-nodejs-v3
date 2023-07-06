

export class BatchQueryPrecheckResultReq {
    public jobs: Array<string>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchQueryPrecheckResultReq {
        this['jobs'] = jobs;
        return this;
    }
}