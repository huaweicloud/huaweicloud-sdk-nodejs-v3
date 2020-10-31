

export class TemplateSimpleInfo {
    public id?: string;
    public title?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): TemplateSimpleInfo {
        this['id'] = id;
        return this;
    }
    public withTitle(title: string): TemplateSimpleInfo {
        this['title'] = title;
        return this;
    }
    public withDescription(description: string): TemplateSimpleInfo {
        this['description'] = description;
        return this;
    }
}