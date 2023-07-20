import { PreCheckInfo } from './PreCheckInfo';


export class BatchPrecheckReq {
    public jobs?: Array<PreCheckInfo>;
    public constructor(jobs?: Array<PreCheckInfo>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<PreCheckInfo>): BatchPrecheckReq {
        this['jobs'] = jobs;
        return this;
    }
}