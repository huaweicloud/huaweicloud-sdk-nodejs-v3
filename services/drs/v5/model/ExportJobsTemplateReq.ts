

export class ExportJobsTemplateReq {
    public jobs?: Array<string>;
    public constructor(jobs?: Array<string>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<string>): ExportJobsTemplateReq {
        this['jobs'] = jobs;
        return this;
    }
}