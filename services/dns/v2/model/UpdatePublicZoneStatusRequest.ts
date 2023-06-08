import { UpdatePublicZoneStatusRequestBody } from './UpdatePublicZoneStatusRequestBody';


export class UpdatePublicZoneStatusRequest {
    private 'zone_id': string | undefined;
    public body?: UpdatePublicZoneStatusRequestBody;
    public constructor(zoneId?: any) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): UpdatePublicZoneStatusRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
    public withBody(body: UpdatePublicZoneStatusRequestBody): UpdatePublicZoneStatusRequest {
        this['body'] = body;
        return this;
    }
}