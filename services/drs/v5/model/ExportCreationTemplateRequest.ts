import { ExportJobsTemplateReq } from './ExportJobsTemplateReq';


export class ExportCreationTemplateRequest {
    private 'X-Language'?: ExportCreationTemplateRequestXLanguageEnum | string;
    public body?: ExportJobsTemplateReq;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ExportCreationTemplateRequestXLanguageEnum | string): ExportCreationTemplateRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ExportCreationTemplateRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ExportCreationTemplateRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: ExportJobsTemplateReq): ExportCreationTemplateRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ExportCreationTemplateRequestXLanguageEnum {
    EN_US = 'en-us',
    ZH_CN = 'zh-cn'
}
