

export class ListObejectLevelCompareOverviewRequest {
    private 'X-Language'?: ListObejectLevelCompareOverviewRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ListObejectLevelCompareOverviewRequestXLanguageEnum | string): ListObejectLevelCompareOverviewRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListObejectLevelCompareOverviewRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListObejectLevelCompareOverviewRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListObejectLevelCompareOverviewRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListObejectLevelCompareOverviewRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
