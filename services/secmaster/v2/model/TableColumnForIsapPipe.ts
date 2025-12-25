

export class TableColumnForIsapPipe {
    private 'column_name'?: string;
    private 'column_data_type'?: TableColumnForIsapPipeColumnDataTypeEnum | string;
    private 'column_data_type_setting'?: string;
    private 'column_type'?: TableColumnForIsapPipeColumnTypeEnum | string;
    private 'column_type_setting'?: string;
    private 'default_value'?: string;
    public nullable?: boolean;
    public array?: boolean;
    public depth?: number;
    private 'parent_name'?: string;
    private 'own_name'?: string;
    public constructor(columnName?: string, columnDataType?: string) { 
        this['column_name'] = columnName;
        this['column_data_type'] = columnDataType;
    }
    public withColumnName(columnName: string): TableColumnForIsapPipe {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnDataType(columnDataType: TableColumnForIsapPipeColumnDataTypeEnum | string): TableColumnForIsapPipe {
        this['column_data_type'] = columnDataType;
        return this;
    }
    public set columnDataType(columnDataType: TableColumnForIsapPipeColumnDataTypeEnum | string  | undefined) {
        this['column_data_type'] = columnDataType;
    }
    public get columnDataType(): TableColumnForIsapPipeColumnDataTypeEnum | string | undefined {
        return this['column_data_type'];
    }
    public withColumnDataTypeSetting(columnDataTypeSetting: string): TableColumnForIsapPipe {
        this['column_data_type_setting'] = columnDataTypeSetting;
        return this;
    }
    public set columnDataTypeSetting(columnDataTypeSetting: string  | undefined) {
        this['column_data_type_setting'] = columnDataTypeSetting;
    }
    public get columnDataTypeSetting(): string | undefined {
        return this['column_data_type_setting'];
    }
    public withColumnType(columnType: TableColumnForIsapPipeColumnTypeEnum | string): TableColumnForIsapPipe {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: TableColumnForIsapPipeColumnTypeEnum | string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): TableColumnForIsapPipeColumnTypeEnum | string | undefined {
        return this['column_type'];
    }
    public withColumnTypeSetting(columnTypeSetting: string): TableColumnForIsapPipe {
        this['column_type_setting'] = columnTypeSetting;
        return this;
    }
    public set columnTypeSetting(columnTypeSetting: string  | undefined) {
        this['column_type_setting'] = columnTypeSetting;
    }
    public get columnTypeSetting(): string | undefined {
        return this['column_type_setting'];
    }
    public withDefaultValue(defaultValue: string): TableColumnForIsapPipe {
        this['default_value'] = defaultValue;
        return this;
    }
    public set defaultValue(defaultValue: string  | undefined) {
        this['default_value'] = defaultValue;
    }
    public get defaultValue(): string | undefined {
        return this['default_value'];
    }
    public withNullable(nullable: boolean): TableColumnForIsapPipe {
        this['nullable'] = nullable;
        return this;
    }
    public withArray(array: boolean): TableColumnForIsapPipe {
        this['array'] = array;
        return this;
    }
    public withDepth(depth: number): TableColumnForIsapPipe {
        this['depth'] = depth;
        return this;
    }
    public withParentName(parentName: string): TableColumnForIsapPipe {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withOwnName(ownName: string): TableColumnForIsapPipe {
        this['own_name'] = ownName;
        return this;
    }
    public set ownName(ownName: string  | undefined) {
        this['own_name'] = ownName;
    }
    public get ownName(): string | undefined {
        return this['own_name'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TableColumnForIsapPipeColumnDataTypeEnum {
    ROW = 'ROW',
    MAP_STRING = 'MAP_STRING',
    MAP_DECIMAL = 'MAP_DECIMAL',
    TINYINT = 'TINYINT',
    SMALLINT = 'SMALLINT',
    INT = 'INT',
    BIGINT = 'BIGINT',
    DECIMAL = 'DECIMAL',
    FLOAT = 'FLOAT',
    DOUBLE = 'DOUBLE',
    CHAR = 'CHAR',
    VARCHAR = 'VARCHAR',
    STRING = 'STRING',
    BOOLEAN = 'BOOLEAN',
    DATE = 'DATE',
    TIME = 'TIME',
    TIMESTAMP = 'TIMESTAMP',
    TIMESTAMP_LTZ = 'TIMESTAMP_LTZ'
}
/**
    * @export
    * @enum {string}
    */
export enum TableColumnForIsapPipeColumnTypeEnum {
    PHYSICAL = 'PHYSICAL',
    METADATA = 'METADATA',
    VIRTUAL_METADATA = 'VIRTUAL_METADATA',
    COMPUTED = 'COMPUTED'
}
