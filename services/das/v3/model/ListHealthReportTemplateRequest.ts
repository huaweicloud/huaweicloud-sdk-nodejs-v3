

export class ListHealthReportTemplateRequest {
    private 'X-Language'?: ListHealthReportTemplateRequestXLanguageEnum | string;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListHealthReportTemplateRequestXLanguageEnum | string): ListHealthReportTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListHealthReportTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListHealthReportTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListHealthReportTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
