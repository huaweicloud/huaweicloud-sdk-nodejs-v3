

export class NewCustomField {
    private 'custom_field'?: string;
    private 'field_name'?: string;
    public value?: string;
    public constructor() { 
    }
    public withCustomField(customField: string): NewCustomField {
        this['custom_field'] = customField;
        return this;
    }
    public set customField(customField: string  | undefined) {
        this['custom_field'] = customField;
    }
    public get customField(): string | undefined {
        return this['custom_field'];
    }
    public withFieldName(fieldName: string): NewCustomField {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withValue(value: string): NewCustomField {
        this['value'] = value;
        return this;
    }
}