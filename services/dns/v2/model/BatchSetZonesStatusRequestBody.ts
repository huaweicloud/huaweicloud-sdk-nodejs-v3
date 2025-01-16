

export class BatchSetZonesStatusRequestBody {
    public status?: string;
    private 'zone_ids'?: Array<string>;
    public constructor(status?: string, zoneIds?: Array<string>) { 
        this['status'] = status;
        this['zone_ids'] = zoneIds;
    }
    public withStatus(status: string): BatchSetZonesStatusRequestBody {
        this['status'] = status;
        return this;
    }
    public withZoneIds(zoneIds: Array<string>): BatchSetZonesStatusRequestBody {
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