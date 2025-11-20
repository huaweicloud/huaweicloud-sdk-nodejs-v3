import { SubTemplateResBody } from './SubTemplateResBody';


export class CreateNotificationTemplateResBody {
    public name?: string;
    public type?: Array<string>;
    public desc?: string;
    public source?: string;
    public templates?: Array<SubTemplateResBody>;
    public locale?: string;
    public constructor(name?: string, source?: string, templates?: Array<SubTemplateResBody>) { 
        this['name'] = name;
        this['source'] = source;
        this['templates'] = templates;
    }
    public withName(name: string): CreateNotificationTemplateResBody {
        this['name'] = name;
        return this;
    }
    public withType(type: Array<string>): CreateNotificationTemplateResBody {
        this['type'] = type;
        return this;
    }
    public withDesc(desc: string): CreateNotificationTemplateResBody {
        this['desc'] = desc;
        return this;
    }
    public withSource(source: string): CreateNotificationTemplateResBody {
        this['source'] = source;
        return this;
    }
    public withTemplates(templates: Array<SubTemplateResBody>): CreateNotificationTemplateResBody {
        this['templates'] = templates;
        return this;
    }
    public withLocale(locale: string): CreateNotificationTemplateResBody {
        this['locale'] = locale;
        return this;
    }
}