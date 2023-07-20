import { ModifyPwdEndPoint } from './ModifyPwdEndPoint';


export class BatchModifyPwdReq {
    public jobs?: Array<ModifyPwdEndPoint>;
    public constructor(jobs?: Array<ModifyPwdEndPoint>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<ModifyPwdEndPoint>): BatchModifyPwdReq {
        this['jobs'] = jobs;
        return this;
    }
}