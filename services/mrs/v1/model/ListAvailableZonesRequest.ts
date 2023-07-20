

export class ListAvailableZonesRequest {
    private 'region_id'?: string;
    public scope?: ListAvailableZonesRequestScopeEnum | string;
    public constructor(regionId?: string) { 
        this['region_id'] = regionId;
    }
    public withRegionId(regionId: string): ListAvailableZonesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withScope(scope: ListAvailableZonesRequestScopeEnum | string): ListAvailableZonesRequest {
        this['scope'] = scope;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListAvailableZonesRequestScopeEnum {
    CENTER = 'Center',
    EDGE = 'Edge'
}
