

export class ColumnInfo {
    private 'column_name'?: string;
    public description?: string;
    public type?: string;
    public constructor() { 
    }
    public withColumnName(columnName: string): ColumnInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withDescription(description: string): ColumnInfo {
        this['description'] = description;
        return this;
    }
    public withType(type: string): ColumnInfo {
        this['type'] = type;
        return this;
    }
}