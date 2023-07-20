

export class AsyncJobResp {
    private 'async_job_id'?: string;
    public status?: AsyncJobRespStatusEnum | string;
    private 'domain_name'?: string;
    private 'user_name'?: string;
    private 'create_time'?: string;
    public constructor(asyncJobId?: string, status?: string, domainName?: string, userName?: string, createTime?: string) { 
        this['async_job_id'] = asyncJobId;
        this['status'] = status;
        this['domain_name'] = domainName;
        this['user_name'] = userName;
        this['create_time'] = createTime;
    }
    public withAsyncJobId(asyncJobId: string): AsyncJobResp {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withStatus(status: AsyncJobRespStatusEnum | string): AsyncJobResp {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): AsyncJobResp {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string  | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName(): string | undefined {
        return this['domain_name'];
    }
    public withUserName(userName: string): AsyncJobResp {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withCreateTime(createTime: string): AsyncJobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AsyncJobRespStatusEnum {
    ASYNC_JOB_VALIDATING = 'ASYNC_JOB_VALIDATING',
    ASYNC_JOB_VALIDATE_FAILED = 'ASYNC_JOB_VALIDATE_FAILED',
    AUTO_PARAM_VALIDATE_SUCCESS = 'AUTO_PARAM_VALIDATE_SUCCESS',
    COMMIT_SUCCESS = 'COMMIT_SUCCESS'
}
