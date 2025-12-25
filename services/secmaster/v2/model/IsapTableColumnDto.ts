import { ColumnDisplaySetting } from './ColumnDisplaySetting';


export class IsapTableColumnDto {
    private 'column_name'?: string;
    private 'column_type'?: IsapTableColumnDtoColumnTypeEnum | string;
    private 'column_type_setting'?: string;
    private 'column_data_type'?: IsapTableColumnDtoColumnDataTypeEnum | string;
    private 'column_data_type_setting'?: string;
    public nullable?: boolean;
    public array?: boolean;
    private 'column_display_setting'?: ColumnDisplaySetting;
    private 'column_sequence_number'?: number;
    public constructor() { 
    }
    public withColumnName(columnName: string): IsapTableColumnDto {
        this['column_name'] = columnName;
        return this;
    }
    public set columnName(columnName: string  | undefined) {
        this['column_name'] = columnName;
    }
    public get columnName(): string | undefined {
        return this['column_name'];
    }
    public withColumnType(columnType: IsapTableColumnDtoColumnTypeEnum | string): IsapTableColumnDto {
        this['column_type'] = columnType;
        return this;
    }
    public set columnType(columnType: IsapTableColumnDtoColumnTypeEnum | string  | undefined) {
        this['column_type'] = columnType;
    }
    public get columnType(): IsapTableColumnDtoColumnTypeEnum | string | undefined {
        return this['column_type'];
    }
    public withColumnTypeSetting(columnTypeSetting: string): IsapTableColumnDto {
        this['column_type_setting'] = columnTypeSetting;
        return this;
    }
    public set columnTypeSetting(columnTypeSetting: string  | undefined) {
        this['column_type_setting'] = columnTypeSetting;
    }
    public get columnTypeSetting(): string | undefined {
        return this['column_type_setting'];
    }
    public withColumnDataType(columnDataType: IsapTableColumnDtoColumnDataTypeEnum | string): IsapTableColumnDto {
        this['column_data_type'] = columnDataType;
        return this;
    }
    public set columnDataType(columnDataType: IsapTableColumnDtoColumnDataTypeEnum | string  | undefined) {
        this['column_data_type'] = columnDataType;
    }
    public get columnDataType(): IsapTableColumnDtoColumnDataTypeEnum | string | undefined {
        return this['column_data_type'];
    }
    public withColumnDataTypeSetting(columnDataTypeSetting: string): IsapTableColumnDto {
        this['column_data_type_setting'] = columnDataTypeSetting;
        return this;
    }
    public set columnDataTypeSetting(columnDataTypeSetting: string  | undefined) {
        this['column_data_type_setting'] = columnDataTypeSetting;
    }
    public get columnDataTypeSetting(): string | undefined {
        return this['column_data_type_setting'];
    }
    public withNullable(nullable: boolean): IsapTableColumnDto {
        this['nullable'] = nullable;
        return this;
    }
    public withArray(array: boolean): IsapTableColumnDto {
        this['array'] = array;
        return this;
    }
    public withColumnDisplaySetting(columnDisplaySetting: ColumnDisplaySetting): IsapTableColumnDto {
        this['column_display_setting'] = columnDisplaySetting;
        return this;
    }
    public set columnDisplaySetting(columnDisplaySetting: ColumnDisplaySetting  | undefined) {
        this['column_display_setting'] = columnDisplaySetting;
    }
    public get columnDisplaySetting(): ColumnDisplaySetting | undefined {
        return this['column_display_setting'];
    }
    public withColumnSequenceNumber(columnSequenceNumber: number): IsapTableColumnDto {
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
export enum IsapTableColumnDtoColumnTypeEnum {
    PHYSICAL = 'PHYSICAL',
    METADATA = 'METADATA',
    VIRTUAL_METADATA = 'VIRTUAL_METADATA',
    COMPUTED = 'COMPUTED'
}
/**
    * @export
    * @enum {string}
    */
export enum IsapTableColumnDtoColumnDataTypeEnum {
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
