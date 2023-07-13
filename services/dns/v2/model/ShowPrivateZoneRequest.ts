

export class ShowPrivateZoneRequest {
    private 'zone_id': string | undefined;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): ShowPrivateZoneRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
}