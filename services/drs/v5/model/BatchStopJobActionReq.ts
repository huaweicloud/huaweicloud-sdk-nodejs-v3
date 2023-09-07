import { StopJobActionInfo } from './StopJobActionInfo';


export class BatchStopJobActionReq {
    public jobs?: Array<StopJobActionInfo>;
    public constructor(jobs?: Array<StopJobActionInfo>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<StopJobActionInfo>): BatchStopJobActionReq {
        this['jobs'] = jobs;
        return this;
    }
}