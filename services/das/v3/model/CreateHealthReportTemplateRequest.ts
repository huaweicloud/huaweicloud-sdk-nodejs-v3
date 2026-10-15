import { CreateHealthReportTemplateReq } from './CreateHealthReportTemplateReq';


export class CreateHealthReportTemplateRequest {
    private 'X-Language'?: CreateHealthReportTemplateRequestXLanguageEnum | string;
    public body?: CreateHealthReportTemplateReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateHealthReportTemplateRequestXLanguageEnum | string): CreateHealthReportTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateHealthReportTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateHealthReportTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: CreateHealthReportTemplateReq): CreateHealthReportTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateHealthReportTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
