import { UpdateJobReq } from './UpdateJobReq';


export class BatchAsyncUpdateJobReq {
    public jobs?: Array<UpdateJobReq>;
    public constructor(jobs?: Array<UpdateJobReq>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<UpdateJobReq>): BatchAsyncUpdateJobReq {
        this['jobs'] = jobs;
        return this;
    }
}