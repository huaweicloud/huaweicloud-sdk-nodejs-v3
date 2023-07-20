import { UpdatePublicZoneInfo } from './UpdatePublicZoneInfo';


export class UpdatePublicZoneRequest {
    private 'zone_id'?: string;
    public body?: UpdatePublicZoneInfo;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): UpdatePublicZoneRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBody(body: UpdatePublicZoneInfo): UpdatePublicZoneRequest {
        this['body'] = body;
        return this;
    }
}