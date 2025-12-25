

export class ModuleTemplateVo {
    public description?: string;
    public name?: string;
    private 'template_id'?: string;
    public title?: string;
    public constructor() { 
    }
    public withDescription(description: string): ModuleTemplateVo {
        this['description'] = description;
        return this;
    }
    public withName(name: string): ModuleTemplateVo {
        this['name'] = name;
        return this;
    }
    public withTemplateId(templateId: string): ModuleTemplateVo {
        this['template_id'] = templateId;
        return this;
    }
    public set templateId(templateId: string  | undefined) {
        this['template_id'] = templateId;
    }
    public get templateId(): string | undefined {
        return this['template_id'];
    }
    public withTitle(title: string): ModuleTemplateVo {
        this['title'] = title;
        return this;
    }
}