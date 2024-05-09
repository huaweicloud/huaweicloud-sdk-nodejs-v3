

export class ListObejectLevelCompareDetailRequest {
    private 'X-Language'?: ListObejectLevelCompareDetailRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_type'?: string;
    private 'compare_job_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string, compareType?: string) { 
        this['job_id'] = jobId;
        this['compare_type'] = compareType;
    }
    public withXLanguage(xLanguage: ListObejectLevelCompareDetailRequestXLanguageEnum | string): ListObejectLevelCompareDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListObejectLevelCompareDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListObejectLevelCompareDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListObejectLevelCompareDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareType(compareType: string): ListObejectLevelCompareDetailRequest {
        this['compare_type'] = compareType;
        return this;
    }
    public set compareType(compareType: string  | undefined) {
        this['compare_type'] = compareType;
    }
    public get compareType(): string | undefined {
        return this['compare_type'];
    }
    public withCompareJobId(compareJobId: string): ListObejectLevelCompareDetailRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withLimit(limit: number): ListObejectLevelCompareDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListObejectLevelCompareDetailRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListObejectLevelCompareDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
