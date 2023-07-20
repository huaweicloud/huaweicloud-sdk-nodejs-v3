

export class BatchQueryRpoAndRtoReq {
    public jobs?: Array<string>;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchQueryRpoAndRtoReq {
        this['jobs'] = jobs;
        return this;
    }
}