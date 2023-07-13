

export class RetryInfo {
    private 'job_id': string | undefined;
    private 'is_sync_re_edit'?: boolean | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): RetryInfo {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withIsSyncReEdit(isSyncReEdit: boolean): RetryInfo {
        this['is_sync_re_edit'] = isSyncReEdit;
        return this;
    }
    public set isSyncReEdit(isSyncReEdit: boolean | undefined) {
        this['is_sync_re_edit'] = isSyncReEdit;
    }
    public get isSyncReEdit() {
        return this['is_sync_re_edit'];
    }
}