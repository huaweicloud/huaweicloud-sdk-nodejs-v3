

export class FilterColumn {
    private 'column_name'?: string;
    private 'column_value'?: string;
    public constructor() { 
    }
    public withColumnName(columnName: string): FilterColumn {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnValue(columnValue: string): FilterColumn {
        this['column_value'] = columnValue;
        return this;
    }
    public set columnValue(columnValue: string  | undefined) {
        this['column_value'] = columnValue;
    }
    public get columnValue(): string | undefined {
        return this['column_value'];
    }
}