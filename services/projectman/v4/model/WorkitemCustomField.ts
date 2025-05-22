

export class WorkitemCustomField {
    private 'field_id'?: string;
    private 'field_name'?: string;
    private 'field_type'?: string;
    private 'field_option_source'?: string;
    public value?: string;
    public constructor() { 
    }
    public withFieldId(fieldId: string): WorkitemCustomField {
        this['field_id'] = fieldId;
        return this;
    }
    public set fieldId(fieldId: string  | undefined) {
        this['field_id'] = fieldId;
    }
    public get fieldId(): string | undefined {
        return this['field_id'];
    }
    public withFieldName(fieldName: string): WorkitemCustomField {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withFieldType(fieldType: string): WorkitemCustomField {
        this['field_type'] = fieldType;
        return this;
    }
    public set fieldType(fieldType: string  | undefined) {
        this['field_type'] = fieldType;
    }
    public get fieldType(): string | undefined {
        return this['field_type'];
    }
    public withFieldOptionSource(fieldOptionSource: string): WorkitemCustomField {
        this['field_option_source'] = fieldOptionSource;
        return this;
    }
    public set fieldOptionSource(fieldOptionSource: string  | undefined) {
        this['field_option_source'] = fieldOptionSource;
    }
    public get fieldOptionSource(): string | undefined {
        return this['field_option_source'];
    }
    public withValue(value: string): WorkitemCustomField {
        this['value'] = value;
        return this;
    }
}