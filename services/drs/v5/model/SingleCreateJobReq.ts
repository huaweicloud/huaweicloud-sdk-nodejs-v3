import { CreateJobReq } from './CreateJobReq';


export class SingleCreateJobReq {
    public job?: CreateJobReq;
    public constructor(job?: CreateJobReq) { 
        this['job'] = job;
    }
    public withJob(job: CreateJobReq): SingleCreateJobReq {
        this['job'] = job;
        return this;
    }
}