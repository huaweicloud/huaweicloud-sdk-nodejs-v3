

export class BatchDeleteZonesRequestBody {
    private 'zone_type'?: string;
    private 'zone_ids'?: Array<string>;
    public constructor(zoneType?: string, zoneIds?: Array<string>) { 
        this['zone_type'] = zoneType;
        this['zone_ids'] = zoneIds;
    }
    public withZoneType(zoneType: string): BatchDeleteZonesRequestBody {
        this['zone_type'] = zoneType;
        return this;
    }
    public set zoneType(zoneType: string  | undefined) {
        this['zone_type'] = zoneType;
    }
    public get zoneType(): string | undefined {
        return this['zone_type'];
    }
    public withZoneIds(zoneIds: Array<string>): BatchDeleteZonesRequestBody {
        this['zone_ids'] = zoneIds;
        return this;
    }
    public set zoneIds(zoneIds: Array<string>  | undefined) {
        this['zone_ids'] = zoneIds;
    }
    public get zoneIds(): Array<string> | undefined {
        return this['zone_ids'];
    }
}