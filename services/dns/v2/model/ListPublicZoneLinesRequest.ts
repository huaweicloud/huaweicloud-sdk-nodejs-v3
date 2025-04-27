

export class ListPublicZoneLinesRequest {
    private 'zone_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): ListPublicZoneLinesRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withLimit(limit: number): ListPublicZoneLinesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListPublicZoneLinesRequest {
        this['offset'] = offset;
        return this;
    }
}