import { ColumnDisplaySetting } from './ColumnDisplaySetting';


export class IsapTableColumn {
    private 'column_name'?: string;
    private 'column_type'?: IsapTableColumnColumnTypeEnum | string;
    private 'column_type_setting'?: string;
    private 'column_data_type'?: IsapTableColumnColumnDataTypeEnum | string;
    private 'column_data_type_setting'?: string;
    public nullable?: boolean;
    public array?: boolean;
    public depth?: number;
    private 'parent_name'?: string;
    private 'own_name'?: string;
    private 'column_display_setting'?: ColumnDisplaySetting;
    private 'column_sequence_number'?: number;
    public constructor() { 
    }
    public withColumnName(columnName: string): IsapTableColumn {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: IsapTableColumnColumnTypeEnum | string): IsapTableColumn {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: IsapTableColumnColumnTypeEnum | string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): IsapTableColumnColumnTypeEnum | string | undefined {
        return this['column_type'];
    }
    public withColumnTypeSetting(columnTypeSetting: string): IsapTableColumn {
        this['column_type_setting'] = columnTypeSetting;
        return this;
    }
    public set columnTypeSetting(columnTypeSetting: string  | undefined) {
        this['column_type_setting'] = columnTypeSetting;
    }
    public get columnTypeSetting(): string | undefined {
        return this['column_type_setting'];
    }
    public withColumnDataType(columnDataType: IsapTableColumnColumnDataTypeEnum | string): IsapTableColumn {
        this['column_data_type'] = columnDataType;
        return this;
    }
    public set columnDataType(columnDataType: IsapTableColumnColumnDataTypeEnum | string  | undefined) {
        this['column_data_type'] = columnDataType;
    }
    public get columnDataType(): IsapTableColumnColumnDataTypeEnum | string | undefined {
        return this['column_data_type'];
    }
    public withColumnDataTypeSetting(columnDataTypeSetting: string): IsapTableColumn {
        this['column_data_type_setting'] = columnDataTypeSetting;
        return this;
    }
    public set columnDataTypeSetting(columnDataTypeSetting: string  | undefined) {
        this['column_data_type_setting'] = columnDataTypeSetting;
    }
    public get columnDataTypeSetting(): string | undefined {
        return this['column_data_type_setting'];
    }
    public withNullable(nullable: boolean): IsapTableColumn {
        this['nullable'] = nullable;
        return this;
    }
    public withArray(array: boolean): IsapTableColumn {
        this['array'] = array;
        return this;
    }
    public withDepth(depth: number): IsapTableColumn {
        this['depth'] = depth;
        return this;
    }
    public withParentName(parentName: string): IsapTableColumn {
        this['parent_name'] = parentName;
        return this;
    }
    public set parentName(parentName: string  | undefined) {
        this['parent_name'] = parentName;
    }
    public get parentName(): string | undefined {
        return this['parent_name'];
    }
    public withOwnName(ownName: string): IsapTableColumn {
        this['own_name'] = ownName;
        return this;
    }
    public set ownName(ownName: string  | undefined) {
        this['own_name'] = ownName;
    }
    public get ownName(): string | undefined {
        return this['own_name'];
    }
    public withColumnDisplaySetting(columnDisplaySetting: ColumnDisplaySetting): IsapTableColumn {
        this['column_display_setting'] = columnDisplaySetting;
        return this;
    }
    public set columnDisplaySetting(columnDisplaySetting: ColumnDisplaySetting  | undefined) {
        this['column_display_setting'] = columnDisplaySetting;
    }
    public get columnDisplaySetting(): ColumnDisplaySetting | undefined {
        return this['column_display_setting'];
    }
    public withColumnSequenceNumber(columnSequenceNumber: number): IsapTableColumn {
        this['column_sequence_number'] = columnSequenceNumber;
        return this;
    }
    public set columnSequenceNumber(columnSequenceNumber: number  | undefined) {
        this['column_sequence_number'] = columnSequenceNumber;
    }
    public get columnSequenceNumber(): number | undefined {
        return this['column_sequence_number'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum IsapTableColumnColumnTypeEnum {
    PHYSICAL = 'PHYSICAL',
    METADATA = 'METADATA',
    VIRTUAL_METADATA = 'VIRTUAL_METADATA',
    COMPUTED = 'COMPUTED'
}
/**
    * @export
    * @enum {string}
    */
export enum IsapTableColumnColumnDataTypeEnum {
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
    KEYWORD = 'KEYWORD',
    BOOLEAN = 'BOOLEAN',
    DATE = 'DATE',
    TIME = 'TIME',
    TIMESTAMP = 'TIMESTAMP',
    TIMESTAMP_LTZ = 'TIMESTAMP_LTZ'
}
