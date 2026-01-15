

export class ColumnInfo {
    private 'column_name'?: string;
    private 'column_type'?: string;
    private 'key_type'?: string;
    private 'column_mapped_name'?: string;
    public status?: boolean;
    public partition?: boolean;
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
    public withColumnType(columnType: string): ColumnInfo {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withKeyType(keyType: string): ColumnInfo {
        this['key_type'] = keyType;
        return this;
    }
    public set keyType(keyType: string  | undefined) {
        this['key_type'] = keyType;
    }
    public get keyType(): string | undefined {
        return this['key_type'];
    }
    public withColumnMappedName(columnMappedName: string): ColumnInfo {
        this['column_mapped_name'] = columnMappedName;
        return this;
    }
    public set columnMappedName(columnMappedName: string  | undefined) {
        this['column_mapped_name'] = columnMappedName;
    }
    public get columnMappedName(): string | undefined {
        return this['column_mapped_name'];
    }
    public withStatus(status: boolean): ColumnInfo {
        this['status'] = status;
        return this;
    }
    public withPartition(partition: boolean): ColumnInfo {
        this['partition'] = partition;
        return this;
    }
}