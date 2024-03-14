

export class SimpleFieldDto {
    private 'column_name'?: string;
    private 'column_type'?: string;
    public constructor() { 
    }
    public withColumnName(columnName: string): SimpleFieldDto {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: string): SimpleFieldDto {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
}