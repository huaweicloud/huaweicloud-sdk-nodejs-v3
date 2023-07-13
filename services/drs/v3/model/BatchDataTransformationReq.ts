import { CheckDataTransformationReq } from './CheckDataTransformationReq';


export class BatchDataTransformationReq {
    public jobs: Array<CheckDataTransformationReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<CheckDataTransformationReq>): BatchDataTransformationReq {
        this['jobs'] = jobs;
        return this;
    }
}