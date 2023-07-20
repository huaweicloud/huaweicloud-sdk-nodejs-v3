import { ActionReq } from './ActionReq';


export class JobActionReq {
    public job?: ActionReq;
    public constructor(job?: ActionReq) { 
        this['job'] = job;
    }
    public withJob(job: ActionReq): JobActionReq {
        this['job'] = job;
        return this;
    }
}