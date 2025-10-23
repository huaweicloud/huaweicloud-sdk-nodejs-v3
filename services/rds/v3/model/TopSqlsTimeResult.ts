

export class TopSqlsTimeResult {
    public id?: string;
    private 'data_type'?: string;
    public value?: string;
    public constructor() { 
    }
    public withId(id: string): TopSqlsTimeResult {
        this['id'] = id;
        return this;
    }
    public withDataType(dataType: string): TopSqlsTimeResult {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
    public withValue(value: string): TopSqlsTimeResult {
        this['value'] = value;
        return this;
    }
}