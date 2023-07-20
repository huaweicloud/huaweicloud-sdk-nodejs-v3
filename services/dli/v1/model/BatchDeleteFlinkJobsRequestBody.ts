

export class BatchDeleteFlinkJobsRequestBody {
    private 'job_ids'?: Array<number>;
    public constructor(jobIds?: Array<number>) { 
        this['job_ids'] = jobIds;
    }
    public withJobIds(jobIds: Array<number>): BatchDeleteFlinkJobsRequestBody {
        this['job_ids'] = jobIds;
        return this;
    }
    public set jobIds(jobIds: Array<number>  | undefined) {
        this['job_ids'] = jobIds;
    }
    public get jobIds(): Array<number> | undefined {
        return this['job_ids'];
    }
}