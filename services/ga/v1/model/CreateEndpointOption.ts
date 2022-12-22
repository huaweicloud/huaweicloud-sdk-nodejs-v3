import { EndpointType } from './EndpointType';


export class CreateEndpointOption {
    private 'resource_id': string | undefined;
    private 'resource_type': EndpointType | undefined;
    public weight?: number;
    private 'ip_address': string | undefined;
    public constructor(resourceId?: any, resourceType?: any, ipAddress?: any) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['ip_address'] = ipAddress;
    }
    public withResourceId(resourceId: string): CreateEndpointOption {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withResourceType(resourceType: EndpointType): CreateEndpointOption {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: EndpointType | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
        return this['resource_type'];
    }
    public withWeight(weight: number): CreateEndpointOption {
        this['weight'] = weight;
        return this;
    }
    public withIpAddress(ipAddress: string): CreateEndpointOption {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
}