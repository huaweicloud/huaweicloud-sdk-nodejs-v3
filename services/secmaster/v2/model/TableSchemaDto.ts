import { IsapTableColumnDisplaySettingDto } from './IsapTableColumnDisplaySettingDto';
import { IsapTableColumnDto } from './IsapTableColumnDto';
import { IsapTableColumnTreeNodeTableColumnDto } from './IsapTableColumnTreeNodeTableColumnDto';


export class TableSchemaDto {
    public columns?: Array<IsapTableColumnDto>;
    private 'primary_key_list'?: Array<string>;
    public partition?: Array<string>;
    private 'watermark_column'?: string;
    private 'watermark_interval'?: number;
    private 'time_filter'?: string;
    private 'display_setting'?: Array<IsapTableColumnDisplaySettingDto>;
    private 'column_tree_root'?: IsapTableColumnTreeNodeTableColumnDto;
    private 'primary_key'?: Array<string>;
    private 'partition_key'?: string;
    public constructor() { 
    }
    public withColumns(columns: Array<IsapTableColumnDto>): TableSchemaDto {
        this['columns'] = columns;
        return this;
    }
    public withPrimaryKeyList(primaryKeyList: Array<string>): TableSchemaDto {
        this['primary_key_list'] = primaryKeyList;
        return this;
    }
    public set primaryKeyList(primaryKeyList: Array<string>  | undefined) {
        this['primary_key_list'] = primaryKeyList;
    }
    public get primaryKeyList(): Array<string> | undefined {
        return this['primary_key_list'];
    }
    public withPartition(partition: Array<string>): TableSchemaDto {
        this['partition'] = partition;
        return this;
    }
    public withWatermarkColumn(watermarkColumn: string): TableSchemaDto {
        this['watermark_column'] = watermarkColumn;
        return this;
    }
    public set watermarkColumn(watermarkColumn: string  | undefined) {
        this['watermark_column'] = watermarkColumn;
    }
    public get watermarkColumn(): string | undefined {
        return this['watermark_column'];
    }
    public withWatermarkInterval(watermarkInterval: number): TableSchemaDto {
        this['watermark_interval'] = watermarkInterval;
        return this;
    }
    public set watermarkInterval(watermarkInterval: number  | undefined) {
        this['watermark_interval'] = watermarkInterval;
    }
    public get watermarkInterval(): number | undefined {
        return this['watermark_interval'];
    }
    public withTimeFilter(timeFilter: string): TableSchemaDto {
        this['time_filter'] = timeFilter;
        return this;
    }
    public set timeFilter(timeFilter: string  | undefined) {
        this['time_filter'] = timeFilter;
    }
    public get timeFilter(): string | undefined {
        return this['time_filter'];
    }
    public withDisplaySetting(displaySetting: Array<IsapTableColumnDisplaySettingDto>): TableSchemaDto {
        this['display_setting'] = displaySetting;
        return this;
    }
    public set displaySetting(displaySetting: Array<IsapTableColumnDisplaySettingDto>  | undefined) {
        this['display_setting'] = displaySetting;
    }
    public get displaySetting(): Array<IsapTableColumnDisplaySettingDto> | undefined {
        return this['display_setting'];
    }
    public withColumnTreeRoot(columnTreeRoot: IsapTableColumnTreeNodeTableColumnDto): TableSchemaDto {
        this['column_tree_root'] = columnTreeRoot;
        return this;
    }
    public set columnTreeRoot(columnTreeRoot: IsapTableColumnTreeNodeTableColumnDto  | undefined) {
        this['column_tree_root'] = columnTreeRoot;
    }
    public get columnTreeRoot(): IsapTableColumnTreeNodeTableColumnDto | undefined {
        return this['column_tree_root'];
    }
    public withPrimaryKey(primaryKey: Array<string>): TableSchemaDto {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: Array<string>  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): Array<string> | undefined {
        return this['primary_key'];
    }
    public withPartitionKey(partitionKey: string): TableSchemaDto {
        this['partition_key'] = partitionKey;
        return this;
    }
    public set partitionKey(partitionKey: string  | undefined) {
        this['partition_key'] = partitionKey;
    }
    public get partitionKey(): string | undefined {
        return this['partition_key'];
    }
}