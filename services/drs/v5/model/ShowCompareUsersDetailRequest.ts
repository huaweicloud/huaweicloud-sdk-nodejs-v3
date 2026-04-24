

export class ShowCompareUsersDetailRequest {
    private 'job_id'?: string;
    private 'compare_job_id'?: string;
    private 'X-Language'?: ShowCompareUsersDetailRequestXLanguageEnum | string;
    public offset?: string;
    public limit?: string;
    public constructor(jobId?: string, compareJobId?: string) { 
        this['job_id'] = jobId;
        this['compare_job_id'] = compareJobId;
    }
    public withJobId(jobId: string): ShowCompareUsersDetailRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareJobId(compareJobId: string): ShowCompareUsersDetailRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withXLanguage(xLanguage: ShowCompareUsersDetailRequestXLanguageEnum | string): ShowCompareUsersDetailRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowCompareUsersDetailRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowCompareUsersDetailRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withOffset(offset: string): ShowCompareUsersDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: string): ShowCompareUsersDetailRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCompareUsersDetailRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
