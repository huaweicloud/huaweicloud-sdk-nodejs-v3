

export class DemoFieldAccess {
    private 'field_name'?: string;
    private 'field_value'?: string;
    public constructor() { 
    }
    public withFieldName(fieldName: string): DemoFieldAccess {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
    public withFieldValue(fieldValue: string): DemoFieldAccess {
        this['field_value'] = fieldValue;
        return this;
    }
    public set fieldValue(fieldValue: string  | undefined) {
        this['field_value'] = fieldValue;
    }
    public get fieldValue(): string | undefined {
        return this['field_value'];
    }
}