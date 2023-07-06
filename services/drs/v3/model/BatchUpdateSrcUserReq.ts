import { UpdateUserReq } from './UpdateUserReq';


export class BatchUpdateSrcUserReq {
    public jobs: Array<UpdateUserReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<UpdateUserReq>): BatchUpdateSrcUserReq {
        this['jobs'] = jobs;
        return this;
    }
}