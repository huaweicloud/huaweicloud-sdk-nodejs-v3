import { StartInfo } from './StartInfo';


export class BatchStartJobReq {
    public jobs: Array<StartInfo>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<StartInfo>): BatchStartJobReq {
        this['jobs'] = jobs;
        return this;
    }
}