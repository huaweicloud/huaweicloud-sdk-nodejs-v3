

export class ShowBatchCreateRecordSetsTaskRequest {
    private 'zone_id'?: string;
    private 'error_item_limit'?: number;
    private 'error_item_offset'?: number;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): ShowBatchCreateRecordSetsTaskRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withErrorItemLimit(errorItemLimit: number): ShowBatchCreateRecordSetsTaskRequest {
        this['error_item_limit'] = errorItemLimit;
        return this;
    }
    public set errorItemLimit(errorItemLimit: number  | undefined) {
        this['error_item_limit'] = errorItemLimit;
    }
    public get errorItemLimit(): number | undefined {
        return this['error_item_limit'];
    }
    public withErrorItemOffset(errorItemOffset: number): ShowBatchCreateRecordSetsTaskRequest {
        this['error_item_offset'] = errorItemOffset;
        return this;
    }
    public set errorItemOffset(errorItemOffset: number  | undefined) {
        this['error_item_offset'] = errorItemOffset;
    }
    public get errorItemOffset(): number | undefined {
        return this['error_item_offset'];
    }
}