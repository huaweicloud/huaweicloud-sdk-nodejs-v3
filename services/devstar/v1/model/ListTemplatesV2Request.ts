import { TemplateQueryV2 } from './TemplateQueryV2';


export class ListTemplatesV2Request {
    private 'X-Language'?: ListTemplatesV2RequestXLanguageEnum | string;
    private 'action_id'?: string;
    public body?: TemplateQueryV2;
    public constructor(actionId?: string) { 
        this['action_id'] = actionId;
    }
    public withXLanguage(xLanguage: ListTemplatesV2RequestXLanguageEnum | string): ListTemplatesV2Request {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: ListTemplatesV2RequestXLanguageEnum | string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): ListTemplatesV2RequestXLanguageEnum | string | undefined {
        return this['X-Language'];
    }
    public withActionId(actionId: string): ListTemplatesV2Request {
        this['action_id'] = actionId;
        return this;
    }
    public set actionId(actionId: string  | undefined) {
        this['action_id'] = actionId;
    }
    public get actionId(): string | undefined {
        return this['action_id'];
    }
    public withBody(body: TemplateQueryV2): ListTemplatesV2Request {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTemplatesV2RequestXLanguageEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
