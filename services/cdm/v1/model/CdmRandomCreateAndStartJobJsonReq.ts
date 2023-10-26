import { Job } from './Job';


export class CdmRandomCreateAndStartJobJsonReq {
    public jobs?: Array<Job>;
    public clusters?: Array<string>;
    public constructor(jobs?: Array<Job>, clusters?: Array<string>) { 
        this['jobs'] = jobs;
        this['clusters'] = clusters;
    }
    public withJobs(jobs: Array<Job>): CdmRandomCreateAndStartJobJsonReq {
        this['jobs'] = jobs;
        return this;
    }
    public withClusters(clusters: Array<string>): CdmRandomCreateAndStartJobJsonReq {
        this['clusters'] = clusters;
        return this;
    }
}