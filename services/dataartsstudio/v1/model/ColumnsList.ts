

export class ColumnsList {
    public comment?: string;
    private 'column_name'?: string;
    private 'column_type'?: string;
    private 'seq_number'?: number;
    public primary?: boolean;
    private 'partition_col'?: boolean;
    public constructor() { 
    }
    public withComment(comment: string): ColumnsList {
        this['comment'] = comment;
        return this;
    }
    public withColumnName(columnName: string): ColumnsList {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: string): ColumnsList {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withSeqNumber(seqNumber: number): ColumnsList {
        this['seq_number'] = seqNumber;
        return this;
    }
    public set seqNumber(seqNumber: number  | undefined) {
        this['seq_number'] = seqNumber;
    }
    public get seqNumber(): number | undefined {
        return this['seq_number'];
    }
    public withPrimary(primary: boolean): ColumnsList {
        this['primary'] = primary;
        return this;
    }
    public withPartitionCol(partitionCol: boolean): ColumnsList {
        this['partition_col'] = partitionCol;
        return this;
    }
    public set partitionCol(partitionCol: boolean  | undefined) {
        this['partition_col'] = partitionCol;
    }
    public get partitionCol(): boolean | undefined {
        return this['partition_col'];
    }
}