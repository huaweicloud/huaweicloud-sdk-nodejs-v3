import { PauseInfo } from './PauseInfo';


export class BatchPauseJobReq {
    public jobs: Array<PauseInfo>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<PauseInfo>): BatchPauseJobReq {
        this['jobs'] = jobs;
        return this;
    }
}