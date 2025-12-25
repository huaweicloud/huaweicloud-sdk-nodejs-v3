import { TableColumnForIsapPipe } from './TableColumnForIsapPipe';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdatePipeSchemaResponse extends SdkResponse {
    public columns?: Array<TableColumnForIsapPipe>;
    private 'watermark_column'?: string;
    private 'watermark_interval'?: number;
    private 'time_filter'?: string;
    public constructor() { 
        super();
    }
    public withColumns(columns: Array<TableColumnForIsapPipe>): UpdatePipeSchemaResponse {
        this['columns'] = columns;
        return this;
    }
    public withWatermarkColumn(watermarkColumn: string): UpdatePipeSchemaResponse {
        this['watermark_column'] = watermarkColumn;
        return this;
    }
    public set watermarkColumn(watermarkColumn: string  | undefined) {
        this['watermark_column'] = watermarkColumn;
    }
    public get watermarkColumn(): string | undefined {
        return this['watermark_column'];
    }
    public withWatermarkInterval(watermarkInterval: number): UpdatePipeSchemaResponse {
        this['watermark_interval'] = watermarkInterval;
        return this;
    }
    public set watermarkInterval(watermarkInterval: number  | undefined) {
        this['watermark_interval'] = watermarkInterval;
    }
    public get watermarkInterval(): number | undefined {
        return this['watermark_interval'];
    }
    public withTimeFilter(timeFilter: string): UpdatePipeSchemaResponse {
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