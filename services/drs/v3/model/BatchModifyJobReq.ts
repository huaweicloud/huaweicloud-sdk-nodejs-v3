import { ModifyJobReq } from './ModifyJobReq';


export class BatchModifyJobReq {
    public jobs?: Array<ModifyJobReq>;
    public constructor(jobs?: Array<ModifyJobReq>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<ModifyJobReq>): BatchModifyJobReq {
        this['jobs'] = jobs;
        return this;
    }
}