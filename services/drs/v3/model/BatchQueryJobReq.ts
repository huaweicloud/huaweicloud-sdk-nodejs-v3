

export class BatchQueryJobReq {
    public jobs?: Array<string>;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchQueryJobReq {
        this['jobs'] = jobs;
        return this;
    }
}