import { TemplateQuery } from './TemplateQuery';


export class ListTemplatesRequest {
    private 'X-Language'?: ListTemplatesRequestXLanguageEnum | string;
    public body?: TemplateQuery;
    public constructor() { 
    }
    public withXLanguage(xLanguage: ListTemplatesRequestXLanguageEnum | string): ListTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTemplatesRequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTemplatesRequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withBody(body: TemplateQuery): ListTemplatesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTemplatesRequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
