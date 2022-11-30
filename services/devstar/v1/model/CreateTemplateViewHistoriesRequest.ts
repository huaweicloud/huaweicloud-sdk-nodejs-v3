import { TemplatesInfo } from './TemplatesInfo';


export class CreateTemplateViewHistoriesRequest {
    private 'X-Language'?: CreateTemplateViewHistoriesRequestXLanguageEnum | undefined;
    public body?: TemplatesInfo;
    public constructor() { 
    }
    public withXLanguage(xLanguage: CreateTemplateViewHistoriesRequestXLanguageEnum): CreateTemplateViewHistoriesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: CreateTemplateViewHistoriesRequestXLanguageEnum | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
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
