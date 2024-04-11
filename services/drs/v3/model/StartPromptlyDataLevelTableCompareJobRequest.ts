

export class StartPromptlyDataLevelTableCompareJobRequest {
    private 'X-Language'?: StartPromptlyDataLevelTableCompareJobRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_job_id'?: string;
    public constructor(jobId?: string, compareJobId?: string) { 
        this['job_id'] = jobId;
        this['compare_job_id'] = compareJobId;
    }
    public withXLanguage(xLanguage: StartPromptlyDataLevelTableCompareJobRequestXLanguageEnum | string): StartPromptlyDataLevelTableCompareJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: StartPromptlyDataLevelTableCompareJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): StartPromptlyDataLevelTableCompareJobRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): StartPromptlyDataLevelTableCompareJobRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareJobId(compareJobId: string): StartPromptlyDataLevelTableCompareJobRequest {
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
export enum StartPromptlyDataLevelTableCompareJobRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
