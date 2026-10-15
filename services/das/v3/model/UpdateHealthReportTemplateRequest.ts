import { UpdateHealthReportTemplateReq } from './UpdateHealthReportTemplateReq';


export class UpdateHealthReportTemplateRequest {
    private 'template_id'?: string;
    private 'X-Language'?: UpdateHealthReportTemplateRequestXLanguageEnum | string;
    public body?: UpdateHealthReportTemplateReq;
    public constructor(templateId?: string) { 
        this['template_id'] = templateId;
    }
    public withTemplateId(templateId: string): UpdateHealthReportTemplateRequest {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withXLanguage(xLanguage: UpdateHealthReportTemplateRequestXLanguageEnum | string): UpdateHealthReportTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: UpdateHealthReportTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): UpdateHealthReportTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: UpdateHealthReportTemplateReq): UpdateHealthReportTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateHealthReportTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
