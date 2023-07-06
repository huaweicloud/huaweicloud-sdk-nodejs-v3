

export class BatchQueryJobReq {
    public jobs: Array<string>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchQueryJobReq {
        this['jobs'] = jobs;
        return this;
    }
}