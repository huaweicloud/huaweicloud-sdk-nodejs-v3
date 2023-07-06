

export class BatchQueryProgressReq {
    public jobs: Array<string>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchQueryProgressReq {
        this['jobs'] = jobs;
        return this;
    }
}