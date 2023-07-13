import { UpdateJobReq } from './UpdateJobReq';


export class SingleUpdateJobReq {
    public job: UpdateJobReq;
    public constructor(job?: any) { 
        this['job'] = job;
    }
    public withJob(job: UpdateJobReq): SingleUpdateJobReq {
        this['job'] = job;
        return this;
    }
}