

export class ListDataCompareOverviewRequest {
    private 'X-Language'?: ListDataCompareOverviewRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'compare_job_id'?: string;
    public status?: number;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string, compareJobId?: string) { 
        this['job_id'] = jobId;
        this['compare_job_id'] = compareJobId;
    }
    public withXLanguage(xLanguage: ListDataCompareOverviewRequestXLanguageEnum | string): ListDataCompareOverviewRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListDataCompareOverviewRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListDataCompareOverviewRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ListDataCompareOverviewRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withCompareJobId(compareJobId: string): ListDataCompareOverviewRequest {
        this['compare_job_id'] = compareJobId;
        return this;
    }
    public set compareJobId(compareJobId: string  | undefined) {
        this['compare_job_id'] = compareJobId;
    }
    public get compareJobId(): string | undefined {
        return this['compare_job_id'];
    }
    public withStatus(status: number): ListDataCompareOverviewRequest {
        this['status'] = status;
        return this;
    }
    public withLimit(limit: number): ListDataCompareOverviewRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListDataCompareOverviewRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListDataCompareOverviewRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
