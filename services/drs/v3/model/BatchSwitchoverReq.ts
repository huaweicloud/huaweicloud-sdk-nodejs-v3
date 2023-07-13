

export class BatchSwitchoverReq {
    public jobs: Array<string>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchSwitchoverReq {
        this['jobs'] = jobs;
        return this;
    }
}