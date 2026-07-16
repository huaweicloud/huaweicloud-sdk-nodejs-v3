

export class TemplateParam {
    public name?: string;
    public description?: string;
    public value?: string;
    public visible?: string;
    public regex?: string;
    public constructor() { 
    }
    public withName(name: string): TemplateParam {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): TemplateParam {
        this['description'] = description;
        return this;
    }
    public withValue(value: string): TemplateParam {
        this['value'] = value;
        return this;
    }
    public withVisible(visible: string): TemplateParam {
        this['visible'] = visible;
        return this;
    }
    public withRegex(regex: string): TemplateParam {
        this['regex'] = regex;
        return this;
    }
}