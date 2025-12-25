

export class ConnectionModuleFieldCreateVo {
    public name?: string;
    public other?: string;
    private 'template_field_id'?: string;
    public title?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ConnectionModuleFieldCreateVo {
        this['name'] = name;
        return this;
    }
    public withOther(other: string): ConnectionModuleFieldCreateVo {
        this['other'] = other;
        return this;
    }
    public withTemplateFieldId(templateFieldId: string): ConnectionModuleFieldCreateVo {
        this['template_field_id'] = templateFieldId;
        return this;
    }
    public set templateFieldId(templateFieldId: string  | undefined) {
        this['template_field_id'] = templateFieldId;
    }
    public get templateFieldId(): string | undefined {
        return this['template_field_id'];
    }
    public withTitle(title: string): ConnectionModuleFieldCreateVo {
        this['title'] = title;
        return this;
    }
    public withType(type: string): ConnectionModuleFieldCreateVo {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ConnectionModuleFieldCreateVo {
        this['value'] = value;
        return this;
    }
}