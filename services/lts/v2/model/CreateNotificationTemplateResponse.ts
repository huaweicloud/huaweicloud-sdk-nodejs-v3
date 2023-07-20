import { SubTemplate } from './SubTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNotificationTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public locale?: CreateNotificationTemplateResponseLocaleEnum | string;
    public templates?: Array<SubTemplate>;
    public constructor() { 
        super();
    }
    public withName(name: string): CreateNotificationTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): CreateNotificationTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): CreateNotificationTemplateResponse {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): CreateNotificationTemplateResponse {
        this['source'] = source;
        return this;
    }
    public withLocale(locale: CreateNotificationTemplateResponseLocaleEnum | string): CreateNotificationTemplateResponse {
        this['locale'] = locale;
        return this;
    }
    public withTemplates(templates: Array<SubTemplate>): CreateNotificationTemplateResponse {
        this['templates'] = templates;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateNotificationTemplateResponseLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
