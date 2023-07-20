

export class ShowHealthCompareJobListRequest {
    private 'X-Language'?: ShowHealthCompareJobListRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public status?: ShowHealthCompareJobListRequestStatusEnum | string;
    public offset?: number;
    public limit?: number;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ShowHealthCompareJobListRequestXLanguageEnum | string): ShowHealthCompareJobListRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowHealthCompareJobListRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowHealthCompareJobListRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowHealthCompareJobListRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withStatus(status: ShowHealthCompareJobListRequestStatusEnum | string): ShowHealthCompareJobListRequest {
        this['status'] = status;
        return this;
    }
    public withOffset(offset: number): ShowHealthCompareJobListRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowHealthCompareJobListRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowHealthCompareJobListRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowHealthCompareJobListRequestStatusEnum {
    WAITING_FOR_RUNNING = 'WAITING_FOR_RUNNING',
    RUNNING = 'RUNNING',
    SUCCESSFUL = 'SUCCESSFUL',
    FAILED = 'FAILED',
    CANCELLED = 'CANCELLED',
    TIMEOUT_INTERRUPT = 'TIMEOUT_INTERRUPT',
    FULL_DOING = 'FULL_DOING',
    INCRE_DOING = 'INCRE_DOING'
}
