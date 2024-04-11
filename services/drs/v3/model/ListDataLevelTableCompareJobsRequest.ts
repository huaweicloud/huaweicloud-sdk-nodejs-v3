

export class ListDataLevelTableCompareJobsRequest {
    private 'X-Language'?: ListDataLevelTableCompareJobsRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ListDataLevelTableCompareJobsRequestXLanguageEnum | string): ListDataLevelTableCompareJobsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDataLevelTableCompareJobsRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDataLevelTableCompareJobsRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListDataLevelTableCompareJobsRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withLimit(limit: number): ListDataLevelTableCompareJobsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataLevelTableCompareJobsRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDataLevelTableCompareJobsRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
