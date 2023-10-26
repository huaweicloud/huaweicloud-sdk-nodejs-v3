import { Job } from './Job';


export class CdmUpdateJobJsonReq {
    public jobs?: Array<Job>;
    public constructor(jobs?: Array<Job>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<Job>): CdmUpdateJobJsonReq {
        this['jobs'] = jobs;
        return this;
    }
}