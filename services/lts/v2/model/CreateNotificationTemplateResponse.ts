import { SubTemplateResBody } from './SubTemplateResBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNotificationTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public templates?: Array<SubTemplateResBody>;
    public locale?: string;
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
    public withTemplates(templates: Array<SubTemplateResBody>): CreateNotificationTemplateResponse {
        this['templates'] = templates;
        return this;
    }
    public withLocale(locale: string): CreateNotificationTemplateResponse {
        this['locale'] = locale;
        return this;
    }
}