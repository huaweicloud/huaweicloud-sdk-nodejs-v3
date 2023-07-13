import { CreateJobReq } from './CreateJobReq';


export class SingleCreateJobReq {
    public job: CreateJobReq;
    public constructor(job?: any) { 
        this['job'] = job;
    }
    public withJob(job: CreateJobReq): SingleCreateJobReq {
        this['job'] = job;
        return this;
    }
}