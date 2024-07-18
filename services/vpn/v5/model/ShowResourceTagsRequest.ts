

export class ShowResourceTagsRequest {
    private 'resource_type'?: ShowResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ShowResourceTagsRequestResourceTypeEnum | string): ShowResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ShowResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowResourceTagsRequestResourceTypeEnum {
    VPN_GATEWAY = 'vpn-gateway',
    VPN_CONNECTION = 'vpn-connection',
    CUSTOMER_GATEWAY = 'customer-gateway',
    P2C_VPN_GATEWAYS = 'p2c-vpn-gateways'
}
