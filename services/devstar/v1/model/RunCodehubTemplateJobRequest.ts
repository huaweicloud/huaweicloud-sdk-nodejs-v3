import { CodehubJobInfo } from './CodehubJobInfo';


export class RunCodehubTemplateJobRequest {
    private 'X-Language'?: RunCodehubTemplateJobRequestXLanguageEnum | undefined;
    public body?: CodehubJobInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage: RunCodehubTemplateJobRequestXLanguageEnum): RunCodehubTemplateJobRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: RunCodehubTemplateJobRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withBody(body: CodehubJobInfo): RunCodehubTemplateJobRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RunCodehubTemplateJobRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
