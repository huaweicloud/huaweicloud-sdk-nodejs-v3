

export class DownloadBatchCreateTemplateRequest {
    private 'X-Language'?: DownloadBatchCreateTemplateRequestXLanguageEnum | string;
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
}

/**
    * @export
    * @enum {string}
    */
export enum DownloadBatchCreateTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
