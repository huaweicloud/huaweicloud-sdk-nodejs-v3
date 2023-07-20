import { AsyncCreateJobReq } from './AsyncCreateJobReq';


export class BatchAsyncCreateJobReq {
    public jobs?: Array<AsyncCreateJobReq>;
    public constructor(jobs?: Array<AsyncCreateJobReq>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<AsyncCreateJobReq>): BatchAsyncCreateJobReq {
        this['jobs'] = jobs;
        return this;
    }
}