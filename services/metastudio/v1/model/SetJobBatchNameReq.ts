

export class SetJobBatchNameReq {
    private 'batch_name'?: string;
    private 'job_ids'?: Array<string>;
    public constructor() { 
    }
    public withBatchName(batchName: string): SetJobBatchNameReq {
        this['batch_name'] = batchName;
        return this;
    }
    public set batchName(batchName: string  | undefined) {
        this['batch_name'] = batchName;
    }
    public get batchName(): string | undefined {
        return this['batch_name'];
    }
    public withJobIds(jobIds: Array<string>): SetJobBatchNameReq {
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