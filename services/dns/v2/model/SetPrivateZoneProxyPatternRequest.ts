import { SetPrivateZoneProxyPatternRequestBody } from './SetPrivateZoneProxyPatternRequestBody';


export class SetPrivateZoneProxyPatternRequest {
    private 'zone_id'?: string;
    public body?: SetPrivateZoneProxyPatternRequestBody;
    public constructor(zoneId?: string) { 
        this['zone_id'] = zoneId;
    }
    public withZoneId(zoneId: string): SetPrivateZoneProxyPatternRequest {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBody(body: SetPrivateZoneProxyPatternRequestBody): SetPrivateZoneProxyPatternRequest {
        this['body'] = body;
        return this;
    }
}