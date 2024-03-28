

export class Column {
    private 'column_name'?: string;
    public type?: string;
    public description?: string;
    private 'is_partition_column'?: boolean;
    public constructor(columnName?: string, type?: string) { 
        this['column_name'] = columnName;
        this['type'] = type;
    }
    public withColumnName(columnName: string): Column {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withType(type: string): Column {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): Column {
        this['description'] = description;
        return this;
    }
    public withIsPartitionColumn(isPartitionColumn: boolean): Column {
        this['is_partition_column'] = isPartitionColumn;
        return this;
    }
    public set isPartitionColumn(isPartitionColumn: boolean  | undefined) {
        this['is_partition_column'] = isPartitionColumn;
    }
    public get isPartitionColumn(): boolean | undefined {
        return this['is_partition_column'];
    }
}