

export class CatalogEndpoints {
    public id?: string;
    private 'interface'?: string;
    public region?: string;
    private 'region_id'?: string;
    public url?: string;
    public constructor(id?: string, _interface?: string, region?: string, regionId?: string, url?: string) { 
        this['id'] = id;
        this['interface'] = _interface;
        this['region'] = region;
        this['region_id'] = regionId;
        this['url'] = url;
    }
    public withId(id: string): CatalogEndpoints {
        this['id'] = id;
        return this;
    }
    public withInterface(_interface: string): CatalogEndpoints {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: string  | undefined) {
        this['interface'] = _interface;
    }
    public get _interface(): string | undefined {
        return this['interface'];
    }
    public withRegion(region: string): CatalogEndpoints {
        this['region'] = region;
        return this;
    }
    public withRegionId(regionId: string): CatalogEndpoints {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withUrl(url: string): CatalogEndpoints {
        this['url'] = url;
        return this;
    }
}