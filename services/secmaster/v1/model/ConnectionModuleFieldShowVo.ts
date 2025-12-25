

export class ConnectionModuleFieldShowVo {
    private 'field_id'?: string;
    public name?: string;
    private 'template_field_id'?: string;
    public type?: string;
    public value?: string;
    public constructor() { 
    }
    public withFieldId(fieldId: string): ConnectionModuleFieldShowVo {
        this['field_id'] = fieldId;
        return this;
    }
    public set fieldId(fieldId: string  | undefined) {
        this['field_id'] = fieldId;
    }
    public get fieldId(): string | undefined {
        return this['field_id'];
    }
    public withName(name: string): ConnectionModuleFieldShowVo {
        this['name'] = name;
        return this;
    }
    public withTemplateFieldId(templateFieldId: string): ConnectionModuleFieldShowVo {
        this['template_field_id'] = templateFieldId;
        return this;
    }
    public set templateFieldId(templateFieldId: string  | undefined) {
        this['template_field_id'] = templateFieldId;
    }
    public get templateFieldId(): string | undefined {
        return this['template_field_id'];
    }
    public withType(type: string): ConnectionModuleFieldShowVo {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ConnectionModuleFieldShowVo {
        this['value'] = value;
        return this;
    }
}