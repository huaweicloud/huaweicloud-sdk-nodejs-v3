

export class ListUsersRequest {
    private 'X-Language'?: ListUsersRequestXLanguageEnum | undefined;
    private 'job_id': string | undefined;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ListUsersRequestXLanguageEnum): ListUsersRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListUsersRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListUsersRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListUsersRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
