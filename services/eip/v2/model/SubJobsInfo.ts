

export class SubJobsInfo {
    private 'sub_jobs'?: Array<object>;
    public constructor() { 
    }
    public withSubJobs(subJobs: Array<object>): SubJobsInfo {
        this['sub_jobs'] = subJobs;
        return this;
    }
    public set subJobs(subJobs: Array<object>  | undefined) {
        this['sub_jobs'] = subJobs;
    }
    public get subJobs(): Array<object> | undefined {
        return this['sub_jobs'];
    }
}