

export class UpdateHarvestJobStatusRequestBody {
    private 'job_id'?: string;
    public status?: UpdateHarvestJobStatusRequestBodyStatusEnum | string;
    public constructor(jobId?: string, status?: string) { 
        this['job_id'] = jobId;
        this['status'] = status;
    }
    public withJobId(jobId: string): UpdateHarvestJobStatusRequestBody {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: UpdateHarvestJobStatusRequestBodyStatusEnum | string): UpdateHarvestJobStatusRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHarvestJobStatusRequestBodyStatusEnum {
    UNSTART = 'UNSTART'
}
