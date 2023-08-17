

export class ParamTypeLimits {
    public disable?: string;
    public name?: string;
    public displayname?: string;
    public id?: string;
    public language?: string;
    public constructor(disable?: string, name?: string, displayname?: string, id?: string, language?: string) { 
        this['disable'] = disable;
        this['name'] = name;
        this['displayname'] = displayname;
        this['id'] = id;
        this['language'] = language;
    }
    public withDisable(disable: string): ParamTypeLimits {
        this['disable'] = disable;
        return this;
    }
    public withName(name: string): ParamTypeLimits {
        this['name'] = name;
        return this;
    }
    public withDisplayname(displayname: string): ParamTypeLimits {
        this['displayname'] = displayname;
        return this;
    }
    public withId(id: string): ParamTypeLimits {
        this['id'] = id;
        return this;
    }
    public withLanguage(language: string): ParamTypeLimits {
        this['language'] = language;
        return this;
    }
}