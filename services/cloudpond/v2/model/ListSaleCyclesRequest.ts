

export class ListSaleCyclesRequest {
    private 'zone_code'?: string;
    public constructor() { 
    }
    public withZoneCode(zoneCode: string): ListSaleCyclesRequest {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
}