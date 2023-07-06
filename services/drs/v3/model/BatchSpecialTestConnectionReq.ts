import { BatchJobActionReq } from './BatchJobActionReq';


export class BatchSpecialTestConnectionReq {
    public jobs: Array<BatchJobActionReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<BatchJobActionReq>): BatchSpecialTestConnectionReq {
        this['jobs'] = jobs;
        return this;
    }
}