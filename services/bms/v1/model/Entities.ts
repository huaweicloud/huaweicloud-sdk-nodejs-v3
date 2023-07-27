import { SubJobs } from './SubJobs';


export class Entities {
    private 'sub_jobs_total'?: number;
    private 'sub_jobs'?: Array<SubJobs>;
    public constructor() { 
    }
    public withSubJobsTotal(subJobsTotal: number): Entities {
        this['sub_jobs_total'] = subJobsTotal;
        return this;
    }
    public set subJobsTotal(subJobsTotal: number  | undefined) {
        this['sub_jobs_total'] = subJobsTotal;
    }
    public get subJobsTotal(): number | undefined {
        return this['sub_jobs_total'];
    }
    public withSubJobs(subJobs: Array<SubJobs>): Entities {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<SubJobs>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<SubJobs> | undefined {
        return this['sub_jobs'];
    }
}