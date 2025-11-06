

export class AddNotificationTemplate {
    public desc?: string;
    public locale?: string;
    public name?: string;
    public templates?: string;
    public source?: string;
    public constructor(locale?: string, name?: string, templates?: string) { 
        this['locale'] = locale;
        this['name'] = name;
        this['templates'] = templates;
    }
    public withDesc(desc: string): AddNotificationTemplate {
        this['desc'] = desc;
        return this;
    }
    public withLocale(locale: string): AddNotificationTemplate {
        this['locale'] = locale;
        return this;
    }
    public withName(name: string): AddNotificationTemplate {
        this['name'] = name;
        return this;
    }
    public withTemplates(templates: string): AddNotificationTemplate {
        this['templates'] = templates;
        return this;
    }
    public withSource(source: string): AddNotificationTemplate {
        this['source'] = source;
        return this;
    }
}