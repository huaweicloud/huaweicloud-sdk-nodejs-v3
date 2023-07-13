

export class AsyncJobResp {
    private 'async_job_id': string | undefined;
    public status: AsyncJobRespStatusEnum;
    private 'domain_name': string | undefined;
    private 'user_name': string | undefined;
    private 'create_time': string | undefined;
    public constructor(asyncJobId?: any, status?: any, domainName?: any, userName?: any, createTime?: any) { 
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
    public set asyncJobId(asyncJobId: string | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId() {
        return this['async_job_id'];
    }
    public withStatus(status: AsyncJobRespStatusEnum): AsyncJobResp {
        this['status'] = status;
        return this;
    }
    public withDomainName(domainName: string): AsyncJobResp {
        this['domain_name'] = domainName;
        return this;
    }
    public set domainName(domainName: string | undefined) {
        this['domain_name'] = domainName;
    }
    public get domainName() {
        return this['domain_name'];
    }
    public withUserName(userName: string): AsyncJobResp {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string | undefined) {
        this['user_name'] = userName;
    }
    public get userName() {
        return this['user_name'];
    }
    public withCreateTime(createTime: string): AsyncJobResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
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
    ASYNC_JOB_CREATING = 'ASYNC_JOB_CREATING',
    ASYNC_JOB_CREATE_FAILED = 'ASYNC_JOB_CREATE_FAILED',
    ASYNC_JOB_COMPLETED = 'ASYNC_JOB_COMPLETED'
}
