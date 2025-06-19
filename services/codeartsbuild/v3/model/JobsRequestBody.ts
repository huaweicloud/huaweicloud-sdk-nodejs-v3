

export class JobsRequestBody {
    private 'job_ids'?: Array<string>;
    public constructor(jobIds?: Array<string>) { 
        this['job_ids'] = jobIds;
    }
    public withJobIds(jobIds: Array<string>): JobsRequestBody {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<string>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<string> | undefined {
        return this['job_ids'];
    }
}