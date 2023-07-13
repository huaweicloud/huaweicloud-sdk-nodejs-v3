

export class AsyncCreateJobResp {
    private 'async_job_id': string | undefined;
    public constructor(asyncJobId?: any) { 
        this['async_job_id'] = asyncJobId;
    }
    public withAsyncJobId(asyncJobId: string): AsyncCreateJobResp {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId() {
        return this['async_job_id'];
    }
}