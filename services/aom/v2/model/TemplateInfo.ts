

export class TemplateInfo {
    public name?: string;
    public type?: string;
    public query?: string;
    public description?: string;
    public constructor() { 
    }
    public withName(name: string): TemplateInfo {
        this['name'] = name;
        return this;
    }
    public withType(type: string): TemplateInfo {
        this['type'] = type;
        return this;
    }
    public withQuery(query: string): TemplateInfo {
        this['query'] = query;
        return this;
    }
    public withDescription(description: string): TemplateInfo {
        this['description'] = description;
        return this;
    }
}