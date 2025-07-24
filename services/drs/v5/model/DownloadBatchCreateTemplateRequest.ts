

export class DownloadBatchCreateTemplateRequest {
    private 'X-Language'?: DownloadBatchCreateTemplateRequestXLanguageEnum | string;
    private 'engine_type'?: string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: DownloadBatchCreateTemplateRequestXLanguageEnum | string): DownloadBatchCreateTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: DownloadBatchCreateTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): DownloadBatchCreateTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withEngineType(engineType: string): DownloadBatchCreateTemplateRequest {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadBatchCreateTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
