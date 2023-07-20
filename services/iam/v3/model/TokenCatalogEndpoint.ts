

export class TokenCatalogEndpoint {
    public url?: string;
    public region?: string;
    private 'region_id'?: string;
    private 'interface'?: string;
    public id?: string;
    public constructor(url?: string, region?: string, regionId?: string, _interface?: string, id?: string) { 
        this['url'] = url;
        this['region'] = region;
        this['region_id'] = regionId;
        this['interface'] = _interface;
        this['id'] = id;
    }
    public withUrl(url: string): TokenCatalogEndpoint {
        this['url'] = url;
        return this;
    }
    public withRegion(region: string): TokenCatalogEndpoint {
        this['region'] = region;
        return this;
    }
    public withRegionId(regionId: string): TokenCatalogEndpoint {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withInterface(_interface: string): TokenCatalogEndpoint {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: string  | undefined) {
        this['interface'] = _interface;
    }
    public get _interface(): string | undefined {
        return this['interface'];
    }
    public withId(id: string): TokenCatalogEndpoint {
        this['id'] = id;
        return this;
    }
}