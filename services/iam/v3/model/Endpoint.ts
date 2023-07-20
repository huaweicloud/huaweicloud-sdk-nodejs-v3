import { Links } from './Links';


export class Endpoint {
    private 'service_id'?: string;
    private 'region_id'?: string;
    public links?: Links;
    public id?: string;
    private 'interface'?: string;
    public region?: string;
    public url?: string;
    public enabled?: boolean;
    public constructor(serviceId?: string, regionId?: string, links?: Links, id?: string, _interface?: string, region?: string, url?: string, enabled?: boolean) { 
        this['service_id'] = serviceId;
        this['region_id'] = regionId;
        this['links'] = links;
        this['id'] = id;
        this['interface'] = _interface;
        this['region'] = region;
        this['url'] = url;
        this['enabled'] = enabled;
    }
    public withServiceId(serviceId: string): Endpoint {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withRegionId(regionId: string): Endpoint {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withLinks(links: Links): Endpoint {
        this['links'] = links;
        return this;
    }
    public withId(id: string): Endpoint {
        this['id'] = id;
        return this;
    }
    public withInterface(_interface: string): Endpoint {
        this['interface'] = _interface;
        return this;
    }
    public set _interface(_interface: string  | undefined) {
        this['interface'] = _interface;
    }
    public get _interface(): string | undefined {
        return this['interface'];
    }
    public withRegion(region: string): Endpoint {
        this['region'] = region;
        return this;
    }
    public withUrl(url: string): Endpoint {
        this['url'] = url;
        return this;
    }
    public withEnabled(enabled: boolean): Endpoint {
        this['enabled'] = enabled;
        return this;
    }
}