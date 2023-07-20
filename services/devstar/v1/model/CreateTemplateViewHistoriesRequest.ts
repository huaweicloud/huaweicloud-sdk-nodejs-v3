import { TemplatesInfo } from './TemplatesInfo';


export class CreateTemplateViewHistoriesRequest {
    private 'X-Language'?: CreateTemplateViewHistoriesRequestXLanguageEnum | string;
    public body?: TemplatesInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateTemplateViewHistoriesRequestXLanguageEnum | string): CreateTemplateViewHistoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateTemplateViewHistoriesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): CreateTemplateViewHistoriesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: TemplatesInfo): CreateTemplateViewHistoriesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateTemplateViewHistoriesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
