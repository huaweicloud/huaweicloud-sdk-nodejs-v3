import { ActionReq } from './ActionReq';


export class BatchJobActionReq {
    public jobs?: Array<ActionReq>;
    public constructor(jobs?: Array<ActionReq>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<ActionReq>): BatchJobActionReq {
        this['jobs'] = jobs;
        return this;
    }
}