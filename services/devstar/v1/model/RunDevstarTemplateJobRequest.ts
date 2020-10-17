import { TemplateJobInfo } from './TemplateJobInfo';


export class RunDevstarTemplateJobRequest {
    public xLanguage?: RunDevstarTemplateJobRequestXLanguageEnum;
    public body?: TemplateJobInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage?: RunDevstarTemplateJobRequestXLanguageEnum): RunDevstarTemplateJobRequest {
        this.xLanguage = xLanguage;
        return this;
    }
    public withBody(body?: TemplateJobInfo): RunDevstarTemplateJobRequest {
        this.body = body;
        return this;
    }
    public getParseParam() {
        return this.body;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunDevstarTemplateJobRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
