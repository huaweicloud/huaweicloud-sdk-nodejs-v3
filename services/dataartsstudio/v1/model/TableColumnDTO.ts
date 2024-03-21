

export class TableColumnDTO {
    private 'column_name'?: string;
    public description?: string;
    public type?: string;
    private 'is_partition_column'?: boolean;
    public constructor() { 
    }
    public withColumnName(columnName: string): TableColumnDTO {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withDescription(description: string): TableColumnDTO {
        this['description'] = description;
        return this;
    }
    public withType(type: string): TableColumnDTO {
        this['type'] = type;
        return this;
    }
    public withIsPartitionColumn(isPartitionColumn: boolean): TableColumnDTO {
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