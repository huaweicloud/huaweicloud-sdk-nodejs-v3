

export class ShowCompareProgressRequest {
    private 'X-Language'?: ShowCompareProgressRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_job_id'?: string;
    public constructor(jobId?: string, compareJobId?: string) { 
        this['job_id'] = jobId;
        this['compare_job_id'] = compareJobId;
    }
    public withXLanguage(xLanguage: ShowCompareProgressRequestXLanguageEnum | string): ShowCompareProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowCompareProgressRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowCompareProgressRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowCompareProgressRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareJobId(compareJobId: string): ShowCompareProgressRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowCompareProgressRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
