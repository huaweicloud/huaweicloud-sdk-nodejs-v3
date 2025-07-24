

export class QueryCustomFieldsInfo {
    public id?: number;
    public values?: Array<string>;
    private 'field_name'?: string;
    public constructor() { 
    }
    public withId(id: number): QueryCustomFieldsInfo {
        this['id'] = id;
        return this;
    }
    public withValues(values: Array<string>): QueryCustomFieldsInfo {
        this['values'] = values;
        return this;
    }
    public withFieldName(fieldName: string): QueryCustomFieldsInfo {
        this['field_name'] = fieldName;
        return this;
    }
    public set fieldName(fieldName: string  | undefined) {
        this['field_name'] = fieldName;
    }
    public get fieldName(): string | undefined {
        return this['field_name'];
    }
}