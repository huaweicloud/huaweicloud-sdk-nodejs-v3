

export class CatalogEndpoints {
    public id: string;
    private 'interface': string | undefined;
    public region: string;
    private 'region_id': string | undefined;
    public url: string;
    public constructor(id: any, _interface: any, region: any, regionId: any, url: any) { 
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
    public set _interface(_interface: string | undefined) {
        this['interface'] = _interface;
    }
    public get _interface() {
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
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withUrl(url: string): CatalogEndpoints {
        this['url'] = url;
        return this;
    }
}