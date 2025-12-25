import { SchemaColumns } from './SchemaColumns';


export class Schema {
    public columns?: Array<SchemaColumns>;
    public partition?: Array<string>;
    private 'primary_key'?: Array<string>;
    private 'time_filter'?: string;
    private 'watermark_column'?: string;
    private 'watermark_interval'?: number;
    public constructor() { 
    }
    public withColumns(columns: Array<SchemaColumns>): Schema {
        this['columns'] = columns;
        return this;
    }
    public withPartition(partition: Array<string>): Schema {
        this['partition'] = partition;
        return this;
    }
    public withPrimaryKey(primaryKey: Array<string>): Schema {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: Array<string>  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): Array<string> | undefined {
        return this['primary_key'];
    }
    public withTimeFilter(timeFilter: string): Schema {
        this['time_filter'] = timeFilter;
        return this;
    }
    public set timeFilter(timeFilter: string  | undefined) {
        this['time_filter'] = timeFilter;
    }
    public get timeFilter(): string | undefined {
        return this['time_filter'];
    }
    public withWatermarkColumn(watermarkColumn: string): Schema {
        this['watermark_column'] = watermarkColumn;
        return this;
    }
    public set watermarkColumn(watermarkColumn: string  | undefined) {
        this['watermark_column'] = watermarkColumn;
    }
    public get watermarkColumn(): string | undefined {
        return this['watermark_column'];
    }
    public withWatermarkInterval(watermarkInterval: number): Schema {
        this['watermark_interval'] = watermarkInterval;
        return this;
    }
    public set watermarkInterval(watermarkInterval: number  | undefined) {
        this['watermark_interval'] = watermarkInterval;
    }
    public get watermarkInterval(): number | undefined {
        return this['watermark_interval'];
    }
}