import { SubTemplate } from './SubTemplate';


export class CreateNotificationTemplateRequestBody {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public locale?: CreateNotificationTemplateRequestBodyLocaleEnum | string;
    public templates?: Array<SubTemplate>;
    public constructor(name?: string, desc?: string, source?: string, locale?: string, templates?: Array<SubTemplate>) { 
        this['name'] = name;
        this['desc'] = desc;
        this['source'] = source;
        this['locale'] = locale;
        this['templates'] = templates;
    }
    public withName(name: string): CreateNotificationTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): CreateNotificationTemplateRequestBody {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): CreateNotificationTemplateRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): CreateNotificationTemplateRequestBody {
        this['source'] = source;
        return this;
    }
    public withLocale(locale: CreateNotificationTemplateRequestBodyLocaleEnum | string): CreateNotificationTemplateRequestBody {
        this['locale'] = locale;
        return this;
    }
    public withTemplates(templates: Array<SubTemplate>): CreateNotificationTemplateRequestBody {
        this['templates'] = templates;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationTemplateRequestBodyLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
