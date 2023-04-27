import { SubTemplate } from './SubTemplate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNotificationTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public locale?: UpdateNotificationTemplateResponseLocaleEnum;
    public templates?: Array<SubTemplate>;
    public constructor() { 
        super();
    }
    public withName(name: string): UpdateNotificationTemplateResponse {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): UpdateNotificationTemplateResponse {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): UpdateNotificationTemplateResponse {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): UpdateNotificationTemplateResponse {
        this['source'] = source;
        return this;
    }
    public withLocale(locale: UpdateNotificationTemplateResponseLocaleEnum): UpdateNotificationTemplateResponse {
        this['locale'] = locale;
        return this;
    }
    public withTemplates(templates: Array<SubTemplate>): UpdateNotificationTemplateResponse {
        this['templates'] = templates;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateNotificationTemplateResponseLocaleEnum {
    ZH_CN = 'zh-cn',
    EN_US = 'en-us'
}
