

export class ShowProgressDataRequest {
    private 'X-Language'?: ShowProgressDataRequestXLanguageEnum | string;
    private 'job_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    public constructor(jobId?: string, type?: string) { 
        this['job_id'] = jobId;
        this['type'] = type;
    }
    public withXLanguage(xLanguage: ShowProgressDataRequestXLanguageEnum | string): ShowProgressDataRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowProgressDataRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowProgressDataRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowProgressDataRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withOffset(offset: number): ShowProgressDataRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowProgressDataRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ShowProgressDataRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowProgressDataRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
