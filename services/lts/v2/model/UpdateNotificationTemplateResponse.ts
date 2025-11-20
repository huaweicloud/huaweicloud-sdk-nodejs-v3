import { SubTemplateResBody } from './SubTemplateResBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNotificationTemplateResponse extends SdkResponse {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public templates?: Array<SubTemplateResBody>;
    public locale?: string;
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
    public withTemplates(templates: Array<SubTemplateResBody>): UpdateNotificationTemplateResponse {
        this['templates'] = templates;
        return this;
    }
    public withLocale(locale: string): UpdateNotificationTemplateResponse {
        this['locale'] = locale;
        return this;
    }
}