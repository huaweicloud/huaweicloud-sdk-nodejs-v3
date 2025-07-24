

export class ShowExportProgressRequest {
    private 'X-Language'?: ShowExportProgressRequestXLanguageEnum | string;
    private 'async_job_id'?: string;
    public constructor(asyncJobId?: string) { 
        this['async_job_id'] = asyncJobId;
    }
    public withXLanguage(xLanguage: ShowExportProgressRequestXLanguageEnum | string): ShowExportProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowExportProgressRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowExportProgressRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withAsyncJobId(asyncJobId: string): ShowExportProgressRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowExportProgressRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
