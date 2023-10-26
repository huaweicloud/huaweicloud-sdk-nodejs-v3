import { Job } from './Job';


export class CdmCreateJobJsonReq {
    public jobs?: Array<Job>;
    public constructor(jobs?: Array<Job>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<Job>): CdmCreateJobJsonReq {
        this['jobs'] = jobs;
        return this;
    }
}