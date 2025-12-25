

export class SchemaColumns {
    public array?: boolean;
    private 'column_data_type'?: string;
    private 'column_data_type_setting'?: string;
    private 'column_name'?: string;
    private 'column_sequence_number'?: number;
    private 'column_type'?: string;
    private 'column_type_setting'?: string;
    public depth?: number;
    public nullable?: boolean;
    private 'own_name'?: string;
    private 'parent_name'?: string;
    public constructor() { 
    }
    public withArray(array: boolean): SchemaColumns {
        this['array'] = array;
        return this;
    }
    public withColumnDataType(columnDataType: string): SchemaColumns {
        this['column_data_type'] = columnDataType;
        return this;
    }
    public set columnDataType(columnDataType: string  | undefined) {
        this['column_data_type'] = columnDataType;
    }
    public get columnDataType(): string | undefined {
        return this['column_data_type'];
    }
    public withColumnDataTypeSetting(columnDataTypeSetting: string): SchemaColumns {
        this['column_data_type_setting'] = columnDataTypeSetting;
        return this;
    }
    public set columnDataTypeSetting(columnDataTypeSetting: string  | undefined) {
        this['column_data_type_setting'] = columnDataTypeSetting;
    }
    public get columnDataTypeSetting(): string | undefined {
        return this['column_data_type_setting'];
    }
    public withColumnName(columnName: string): SchemaColumns {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnSequenceNumber(columnSequenceNumber: number): SchemaColumns {
        this['column_sequence_number'] = columnSequenceNumber;
        return this;
    }
    public set columnSequenceNumber(columnSequenceNumber: number  | undefined) {
        this['column_sequence_number'] = columnSequenceNumber;
    }
    public get columnSequenceNumber(): number | undefined {
        return this['column_sequence_number'];
    }
    public withColumnType(columnType: string): SchemaColumns {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): string | undefined {
        return this['column_type'];
    }
    public withColumnTypeSetting(columnTypeSetting: string): SchemaColumns {
        this['column_type_setting'] = columnTypeSetting;
        return this;
    }
    public set columnTypeSetting(columnTypeSetting: string  | undefined) {
        this['column_type_setting'] = columnTypeSetting;
    }
    public get columnTypeSetting(): string | undefined {
        return this['column_type_setting'];
    }
    public withDepth(depth: number): SchemaColumns {
        this['depth'] = depth;
        return this;
    }
    public withNullable(nullable: boolean): SchemaColumns {
        this['nullable'] = nullable;
        return this;
    }
    public withOwnName(ownName: string): SchemaColumns {
        this['own_name'] = ownName;
        return this;
    }
    public set ownName(ownName: string  | undefined) {
        this['own_name'] = ownName;
    }
    public get ownName(): string | undefined {
        return this['own_name'];
    }
    public withParentName(parentName: string): SchemaColumns {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
}