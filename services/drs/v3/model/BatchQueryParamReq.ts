

export class BatchQueryParamReq {
    public jobs?: Array<string>;
    public refresh?: string;
    public constructor(jobs?: Array<string>, refresh?: string) { 
        this['jobs'] = jobs;
        this['refresh'] = refresh;
    }
    public withJobs(jobs: Array<string>): BatchQueryParamReq {
        this['jobs'] = jobs;
        return this;
    }
    public withRefresh(refresh: string): BatchQueryParamReq {
        this['refresh'] = refresh;
        return this;
    }
}