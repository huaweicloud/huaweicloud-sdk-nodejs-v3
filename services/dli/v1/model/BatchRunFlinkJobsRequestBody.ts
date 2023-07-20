

export class BatchRunFlinkJobsRequestBody {
    private 'resume_savepoint'?: boolean;
    private 'job_ids'?: Array<number>;
    public constructor(jobIds?: Array<number>) { 
        this['job_ids'] = jobIds;
    }
    public withResumeSavepoint(resumeSavepoint: boolean): BatchRunFlinkJobsRequestBody {
        this['resume_savepoint'] = resumeSavepoint;
        return this;
    }
    public set resumeSavepoint(resumeSavepoint: boolean  | undefined) {
        this['resume_savepoint'] = resumeSavepoint;
    }
    public get resumeSavepoint(): boolean | undefined {
        return this['resume_savepoint'];
    }
    public withJobIds(jobIds: Array<number>): BatchRunFlinkJobsRequestBody {
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