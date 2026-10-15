

export class ShowTaskExecuteProgressRequest {
    private 'X-Language'?: ShowTaskExecuteProgressRequestXLanguageEnum | string;
    private 'async_job_id'?: string;
    public type?: string;
    public constructor(asyncJobId?: string) { 
        this['async_job_id'] = asyncJobId;
    }
    public withXLanguage(xLanguage: ShowTaskExecuteProgressRequestXLanguageEnum | string): ShowTaskExecuteProgressRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ShowTaskExecuteProgressRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ShowTaskExecuteProgressRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withAsyncJobId(asyncJobId: string): ShowTaskExecuteProgressRequest {
        this['async_job_id'] = asyncJobId;
        return this;
    }
    public set asyncJobId(asyncJobId: string  | undefined) {
        this['async_job_id'] = asyncJobId;
    }
    public get asyncJobId(): string | undefined {
        return this['async_job_id'];
    }
    public withType(type: string): ShowTaskExecuteProgressRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowTaskExecuteProgressRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn',
    ES_US = 'es-us',
    PT_BR = 'pt-br'
}
