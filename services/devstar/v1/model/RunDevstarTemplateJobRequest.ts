import { TemplateJobInfo } from './TemplateJobInfo';


export class RunDevstarTemplateJobRequest {
    private 'X-Language'?: RunDevstarTemplateJobRequestXLanguageEnum | string;
    public body?: TemplateJobInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage: RunDevstarTemplateJobRequestXLanguageEnum | string): RunDevstarTemplateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RunDevstarTemplateJobRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): RunDevstarTemplateJobRequestXLanguageEnum | string | undefined {
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
