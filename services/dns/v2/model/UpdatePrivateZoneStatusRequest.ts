import { UpdateZoneStatusRequestBody } from './UpdateZoneStatusRequestBody';


export class UpdatePrivateZoneStatusRequest {
    private 'zone_id'?: string;
    public body?: UpdateZoneStatusRequestBody;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): UpdatePrivateZoneStatusRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBody(body: UpdateZoneStatusRequestBody): UpdatePrivateZoneStatusRequest {
        this['body'] = body;
        return this;
    }
}