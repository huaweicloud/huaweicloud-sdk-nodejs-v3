import { StartInfo } from './StartInfo';


export class BatchStartJobReq {
    public jobs?: Array<StartInfo>;
    public constructor(jobs?: Array<StartInfo>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<StartInfo>): BatchStartJobReq {
        this['jobs'] = jobs;
        return this;
    }
}