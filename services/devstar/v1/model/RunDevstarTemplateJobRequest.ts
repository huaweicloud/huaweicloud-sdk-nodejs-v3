import { TemplateJobInfo } from './TemplateJobInfo';


export class RunDevstarTemplateJobRequest {
    private 'X-Language'?: RunDevstarTemplateJobRequestXLanguageEnum | undefined;
    public body?: TemplateJobInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage: RunDevstarTemplateJobRequestXLanguageEnum): RunDevstarTemplateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RunDevstarTemplateJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: TemplateJobInfo): RunDevstarTemplateJobRequest {
        this['body'] = body;
        return this;
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
