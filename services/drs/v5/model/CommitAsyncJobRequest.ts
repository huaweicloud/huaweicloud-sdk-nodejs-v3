

export class CommitAsyncJobRequest {
    private 'async_job_id': string | undefined;
    private 'X-Language'?: CommitAsyncJobRequestXLanguageEnum | undefined;
    public constructor(asyncJobId?: any) { 
        this['async_job_id'] = asyncJobId;
    }
    public withAsyncJobId(asyncJobId: string): CommitAsyncJobRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId() {
        return this['async_job_id'];
    }
    public withXLanguage(xLanguage: CommitAsyncJobRequestXLanguageEnum): CommitAsyncJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CommitAsyncJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
