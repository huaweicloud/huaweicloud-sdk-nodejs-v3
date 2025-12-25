

export class ShowModuleFieldExportVo {
    public name?: string;
    private 'template_field_id'?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withName(name: string): ShowModuleFieldExportVo {
        this['name'] = name;
        return this;
    }
    public withTemplateFieldId(templateFieldId: string): ShowModuleFieldExportVo {
        this['template_field_id'] = templateFieldId;
        return this;
    }
    public set templateFieldId(templateFieldId: string  | undefined) {
        this['template_field_id'] = templateFieldId;
    }
    public get templateFieldId(): string | undefined {
        return this['template_field_id'];
    }
    public withType(type: string): ShowModuleFieldExportVo {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ShowModuleFieldExportVo {
        this['value'] = value;
        return this;
    }
}