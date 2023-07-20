

export class AsyncCommitJobResp {
    private 'async_job_id'?: string;
    public status?: string;
    public msg?: string;
    public constructor(asyncJobId?: string, status?: string, msg?: string) { 
        this['async_job_id'] = asyncJobId;
        this['status'] = status;
        this['msg'] = msg;
    }
    public withAsyncJobId(asyncJobId: string): AsyncCommitJobResp {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withStatus(status: string): AsyncCommitJobResp {
        this['status'] = status;
        return this;
    }
    public withMsg(msg: string): AsyncCommitJobResp {
        this['msg'] = msg;
        return this;
    }
}