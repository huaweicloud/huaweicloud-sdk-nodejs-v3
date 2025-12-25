import { IsapTableColumn } from './IsapTableColumn';


export class IsapTableSchema {
    public columns?: Array<IsapTableColumn>;
    private 'primary_key'?: Array<string>;
    public partition?: Array<string>;
    private 'watermark_column'?: string;
    private 'watermark_interval'?: number;
    private 'time_filter'?: string;
    public constructor() { 
    }
    public withColumns(columns: Array<IsapTableColumn>): IsapTableSchema {
        this['columns'] = columns;
        return this;
    }
    public withPrimaryKey(primaryKey: Array<string>): IsapTableSchema {
        this['primary_key'] = primaryKey;
        return this;
    }
    public set primaryKey(primaryKey: Array<string>  | undefined) {
        this['primary_key'] = primaryKey;
    }
    public get primaryKey(): Array<string> | undefined {
        return this['primary_key'];
    }
    public withPartition(partition: Array<string>): IsapTableSchema {
        this['partition'] = partition;
        return this;
    }
    public withWatermarkColumn(watermarkColumn: string): IsapTableSchema {
        this['watermark_column'] = watermarkColumn;
        return this;
    }
    public set watermarkColumn(watermarkColumn: string  | undefined) {
        this['watermark_column'] = watermarkColumn;
    }
    public get watermarkColumn(): string | undefined {
        return this['watermark_column'];
    }
    public withWatermarkInterval(watermarkInterval: number): IsapTableSchema {
        this['watermark_interval'] = watermarkInterval;
        return this;
    }
    public set watermarkInterval(watermarkInterval: number  | undefined) {
        this['watermark_interval'] = watermarkInterval;
    }
    public get watermarkInterval(): number | undefined {
        return this['watermark_interval'];
    }
    public withTimeFilter(timeFilter: string): IsapTableSchema {
        this['time_filter'] = timeFilter;
        return this;
    }
    public set timeFilter(timeFilter: string  | undefined) {
        this['time_filter'] = timeFilter;
    }
    public get timeFilter(): string | undefined {
        return this['time_filter'];
    }
}