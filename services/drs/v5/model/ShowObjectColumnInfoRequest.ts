

export class ShowObjectColumnInfoRequest {
    private 'X-Language'?: ShowObjectColumnInfoRequestXLanguageEnum | string;
    private 'job_id'?: string;
    private 'object_id'?: string;
    private 'is_refresh'?: boolean;
    public limit?: number;
    public offset?: number;
    public constructor(jobId?: string) { 
        this['job_id'] = jobId;
    }
    public withXLanguage(xLanguage: ShowObjectColumnInfoRequestXLanguageEnum | string): ShowObjectColumnInfoRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowObjectColumnInfoRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowObjectColumnInfoRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withJobId(jobId: string): ShowObjectColumnInfoRequest {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string  | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId(): string | undefined {
        return this['job_id'];
    }
    public withObjectId(objectId: string): ShowObjectColumnInfoRequest {
        this['object_id'] = objectId;
        return this;
    }
    public set objectId(objectId: string  | undefined) {
        this['object_id'] = objectId;
    }
    public get objectId(): string | undefined {
        return this['object_id'];
    }
    public withIsRefresh(isRefresh: boolean): ShowObjectColumnInfoRequest {
        this['is_refresh'] = isRefresh;
        return this;
    }
    public set isRefresh(isRefresh: boolean  | undefined) {
        this['is_refresh'] = isRefresh;
    }
    public get isRefresh(): boolean | undefined {
        return this['is_refresh'];
    }
    public withLimit(limit: number): ShowObjectColumnInfoRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowObjectColumnInfoRequest {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowObjectColumnInfoRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
