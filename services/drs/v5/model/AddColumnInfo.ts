

export class AddColumnInfo {
    private 'column_type'?: string;
    private 'column_name'?: string;
    private 'column_value'?: string;
    private 'data_type'?: string;
    public constructor() { 
    }
    public withColumnType(columnType: string): AddColumnInfo {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withColumnName(columnName: string): AddColumnInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnValue(columnValue: string): AddColumnInfo {
        this['column_value'] = columnValue;
        return this;
    }
    public set columnValue(columnValue: string  | undefined) {
        this['column_value'] = columnValue;
    }
    public get columnValue(): string | undefined {
        return this['column_value'];
    }
    public withDataType(dataType: string): AddColumnInfo {
        this['data_type'] = dataType;
        return this;
    }
    public set dataType(dataType: string  | undefined) {
        this['data_type'] = dataType;
    }
    public get dataType(): string | undefined {
        return this['data_type'];
    }
}