

export class UpdateNotificationTemplate {
    public desc?: string;
    public locale?: string;
    public name?: string;
    public templates?: string;
    public constructor(locale?: string, name?: string, templates?: string) { 
        this['locale'] = locale;
        this['name'] = name;
        this['templates'] = templates;
    }
    public withDesc(desc: string): UpdateNotificationTemplate {
        this['desc'] = desc;
        return this;
    }
    public withLocale(locale: string): UpdateNotificationTemplate {
        this['locale'] = locale;
        return this;
    }
    public withName(name: string): UpdateNotificationTemplate {
        this['name'] = name;
        return this;
    }
    public withTemplates(templates: string): UpdateNotificationTemplate {
        this['templates'] = templates;
        return this;
    }
}