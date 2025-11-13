import { UpdateSubTemplate } from './UpdateSubTemplate';


export class UpdateNotificationTemplateRequestBody {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public locale?: UpdateNotificationTemplateRequestBodyLocaleEnum | string;
    public templates?: Array<UpdateSubTemplate>;
    public constructor(name?: string, source?: string, locale?: string, templates?: Array<UpdateSubTemplate>) { 
        this['name'] = name;
        this['source'] = source;
        this['locale'] = locale;
        this['templates'] = templates;
    }
    public withName(name: string): UpdateNotificationTemplateRequestBody {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): UpdateNotificationTemplateRequestBody {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): UpdateNotificationTemplateRequestBody {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): UpdateNotificationTemplateRequestBody {
        this['source'] = source;
        return this;
    }
    public withLocale(locale: UpdateNotificationTemplateRequestBodyLocaleEnum | string): UpdateNotificationTemplateRequestBody {
        this['locale'] = locale;
        return this;
    }
    public withTemplates(templates: Array<UpdateSubTemplate>): UpdateNotificationTemplateRequestBody {
        this['templates'] = templates;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationTemplateRequestBodyLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
