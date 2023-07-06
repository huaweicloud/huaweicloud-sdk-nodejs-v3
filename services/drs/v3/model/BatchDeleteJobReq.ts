import { DeleteJobReq } from './DeleteJobReq';


export class BatchDeleteJobReq {
    public jobs: Array<DeleteJobReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<DeleteJobReq>): BatchDeleteJobReq {
        this['jobs'] = jobs;
        return this;
    }
}