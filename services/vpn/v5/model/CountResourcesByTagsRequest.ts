import { QueryResourcesRequestBody } from './QueryResourcesRequestBody';


export class CountResourcesByTagsRequest {
    private 'resource_type'?: CountResourcesByTagsRequestResourceTypeEnum | string;
    public body?: QueryResourcesRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: CountResourcesByTagsRequestResourceTypeEnum | string): CountResourcesByTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CountResourcesByTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CountResourcesByTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: QueryResourcesRequestBody): CountResourcesByTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CountResourcesByTagsRequestResourceTypeEnum {
    VPN_GATEWAY = 'vpn-gateway',
    VPN_CONNECTION = 'vpn-connection',
    CUSTOMER_GATEWAY = 'customer-gateway',
    P2C_VPN_GATEWAYS = 'p2c-vpn-gateways'
}
