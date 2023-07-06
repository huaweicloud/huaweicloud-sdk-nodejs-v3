import { CreateJobReq } from './CreateJobReq';


export class BatchCreateJobReq {
    public jobs: Array<CreateJobReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<CreateJobReq>): BatchCreateJobReq {
        this['jobs'] = jobs;
        return this;
    }
}