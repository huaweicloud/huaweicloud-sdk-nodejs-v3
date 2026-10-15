

export class BatchSwitchoverReq {
    public jobs?: Array<string>;
    private 'is_pause_job'?: boolean;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): BatchSwitchoverReq {
        this['jobs'] = jobs;
        return this;
    }
    public withIsPauseJob(isPauseJob: boolean): BatchSwitchoverReq {
        this['is_pause_job'] = isPauseJob;
        return this;
    }
    public set isPauseJob(isPauseJob: boolean  | undefined) {
        this['is_pause_job'] = isPauseJob;
    }
    public get isPauseJob(): boolean | undefined {
        return this['is_pause_job'];
    }
}