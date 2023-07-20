

export class CommitAsyncJobRequest {
    private 'async_job_id'?: string;
    private 'X-Language'?: CommitAsyncJobRequestXLanguageEnum | string;
    public constructor(asyncJobId?: string) { 
        this['async_job_id'] = asyncJobId;
    }
    public withAsyncJobId(asyncJobId: string): CommitAsyncJobRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withXLanguage(xLanguage: CommitAsyncJobRequestXLanguageEnum | string): CommitAsyncJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CommitAsyncJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CommitAsyncJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CommitAsyncJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
