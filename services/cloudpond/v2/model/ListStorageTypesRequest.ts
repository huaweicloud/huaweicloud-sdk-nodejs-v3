

export class ListStorageTypesRequest {
    private 'zone_code'?: string;
    public name?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withZoneCode(zoneCode: string): ListStorageTypesRequest {
        this['zone_code'] = zoneCode;
        return this;
    }
    public set zoneCode(zoneCode: string  | undefined) {
        this['zone_code'] = zoneCode;
    }
    public get zoneCode(): string | undefined {
        return this['zone_code'];
    }
    public withName(name: string): ListStorageTypesRequest {
        this['name'] = name;
        return this;
    }
    public withLimit(limit: number): ListStorageTypesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStorageTypesRequest {
        this['marker'] = marker;
        return this;
    }
}