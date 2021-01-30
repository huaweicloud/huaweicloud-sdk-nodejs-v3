import { Links } from './Links';


export class Endpoint {
    private 'service_id': string | undefined;
    private 'region_id': string | undefined;
    public links: Links;
    public id: string;
    private 'interface': string | undefined;
    public region: string;
    public url: string;
    public enabled: boolean;
    public constructor(serviceId: any, regionId: any, links: any, id: any, _interface: any, region: any, url: any, enabled: any) { 
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
    public set serviceId(serviceId: string | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId() {
        return this['service_id'];
    }
    public withRegionId(regionId: string): Endpoint {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
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
    public set _interface(_interface: string | undefined) {
        this['interface'] = _interface;
    }
    public get _interface() {
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