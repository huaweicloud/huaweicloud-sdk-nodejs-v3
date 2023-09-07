

export class QueryColumnInfo {
    private 'column_name'?: string;
    private 'column_type'?: string;
    private 'primary_key_or_unique_index'?: string;
    private 'column_mapped_name'?: string;
    private 'is_filtered'?: boolean;
    private 'is_partition_key'?: boolean;
    public constructor() { 
    }
    public withColumnName(columnName: string): QueryColumnInfo {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: string): QueryColumnInfo {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withPrimaryKeyOrUniqueIndex(primaryKeyOrUniqueIndex: string): QueryColumnInfo {
        this['primary_key_or_unique_index'] = primaryKeyOrUniqueIndex;
        return this;
    }
    public set primaryKeyOrUniqueIndex(primaryKeyOrUniqueIndex: string  | undefined) {
        this['primary_key_or_unique_index'] = primaryKeyOrUniqueIndex;
    }
    public get primaryKeyOrUniqueIndex(): string | undefined {
        return this['primary_key_or_unique_index'];
    }
    public withColumnMappedName(columnMappedName: string): QueryColumnInfo {
        this['column_mapped_name'] = columnMappedName;
        return this;
    }
    public set columnMappedName(columnMappedName: string  | undefined) {
        this['column_mapped_name'] = columnMappedName;
    }
    public get columnMappedName(): string | undefined {
        return this['column_mapped_name'];
    }
    public withIsFiltered(isFiltered: boolean): QueryColumnInfo {
        this['is_filtered'] = isFiltered;
        return this;
    }
    public set isFiltered(isFiltered: boolean  | undefined) {
        this['is_filtered'] = isFiltered;
    }
    public get isFiltered(): boolean | undefined {
        return this['is_filtered'];
    }
    public withIsPartitionKey(isPartitionKey: boolean): QueryColumnInfo {
        this['is_partition_key'] = isPartitionKey;
        return this;
    }
    public set isPartitionKey(isPartitionKey: boolean  | undefined) {
        this['is_partition_key'] = isPartitionKey;
    }
    public get isPartitionKey(): boolean | undefined {
        return this['is_partition_key'];
    }
}