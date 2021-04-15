import { SubJob } from './SubJob';


export class JobEntities {
    private 'sub_jobs'?: Array<SubJob> | undefined;
    private 'sub_jobs_total'?: number | undefined;
    public constructor() { 
    }
    public withSubJobs(subJobs: Array<SubJob>): JobEntities {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJob> | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs() {
        return this['sub_jobs'];
    }
    public withSubJobsTotal(subJobsTotal: number): JobEntities {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal() {
        return this['sub_jobs_total'];
    }
}