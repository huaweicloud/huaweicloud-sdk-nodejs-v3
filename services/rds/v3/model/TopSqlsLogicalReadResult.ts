

export class TopSqlsLogicalReadResult {
    public id?: string;
    private 'data_type'?: string;
    public value?: string;
    public constructor() { 
    }
    public withId(id: string): TopSqlsLogicalReadResult {
        this['id'] = id;
        return this;
    }
    public withDataType(dataType: string): TopSqlsLogicalReadResult {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withValue(value: string): TopSqlsLogicalReadResult {
        this['value'] = value;
        return this;
    }
}