import { TestEndPoint } from './TestEndPoint';


export class BatchTestConnectionReq {
    public jobs: Array<TestEndPoint>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<TestEndPoint>): BatchTestConnectionReq {
        this['jobs'] = jobs;
        return this;
    }
}