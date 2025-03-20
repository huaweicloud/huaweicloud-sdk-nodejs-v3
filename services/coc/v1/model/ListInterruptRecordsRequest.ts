

export class ListInterruptRecordsRequest {
    private 'slo_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'source_id'?: string;
    private 'region_id'?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor(sloId?: string) { 
        this['slo_id'] = sloId;
    }
    public withSloId(sloId: string): ListInterruptRecordsRequest {
        this['slo_id'] = sloId;
        return this;
    }
    public set sloId(sloId: string  | undefined) {
        this['slo_id'] = sloId;
    }
    public get sloId(): string | undefined {
        return this['slo_id'];
    }
    public withOffset(offset: number): ListInterruptRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInterruptRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withSourceId(sourceId: string): ListInterruptRecordsRequest {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withRegionId(regionId: string): ListInterruptRecordsRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withStartTime(startTime: number): ListInterruptRecordsRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListInterruptRecordsRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}