

export class ModuleFieldVo {
    private 'connection_module_id'?: string;
    public name?: string;
    public other?: string;
    private 'template_field_id'?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withConnectionModuleId(connectionModuleId: string): ModuleFieldVo {
        this['connection_module_id'] = connectionModuleId;
        return this;
    }
    public set connectionModuleId(connectionModuleId: string  | undefined) {
        this['connection_module_id'] = connectionModuleId;
    }
    public get connectionModuleId(): string | undefined {
        return this['connection_module_id'];
    }
    public withName(name: string): ModuleFieldVo {
        this['name'] = name;
        return this;
    }
    public withOther(other: string): ModuleFieldVo {
        this['other'] = other;
        return this;
    }
    public withTemplateFieldId(templateFieldId: string): ModuleFieldVo {
        this['template_field_id'] = templateFieldId;
        return this;
    }
    public set templateFieldId(templateFieldId: string  | undefined) {
        this['template_field_id'] = templateFieldId;
    }
    public get templateFieldId(): string | undefined {
        return this['template_field_id'];
    }
    public withType(type: string): ModuleFieldVo {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ModuleFieldVo {
        this['value'] = value;
        return this;
    }
}