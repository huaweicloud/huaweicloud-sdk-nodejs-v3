import { UpdatePrivateZoneInfoReq } from './UpdatePrivateZoneInfoReq';


export class UpdatePrivateZoneRequest {
    private 'zone_id': string | undefined;
    public body?: UpdatePrivateZoneInfoReq;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): UpdatePrivateZoneRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: UpdatePrivateZoneInfoReq): UpdatePrivateZoneRequest {
        this['body'] = body;
        return this;
    }
}