import { ReplaceDefinerInfo } from './ReplaceDefinerInfo';


export class BatchReplaceDefinerReq {
    public jobs?: Array<ReplaceDefinerInfo>;
    public constructor(jobs?: Array<ReplaceDefinerInfo>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<ReplaceDefinerInfo>): BatchReplaceDefinerReq {
        this['jobs'] = jobs;
        return this;
    }
}