import { EndpointType } from './EndpointType';


export class CreateEndpointOption {
    private 'resource_id'?: string;
    private 'resource_type'?: EndpointType;
    public weight?: number;
    private 'ip_address'?: string;
    public constructor(resourceId?: string, resourceType?: EndpointType, ipAddress?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
        this['ip_address'] = ipAddress;
    }
    public withResourceId(resourceId: string): CreateEndpointOption {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: EndpointType): CreateEndpointOption {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: EndpointType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): EndpointType | undefined {
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
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}