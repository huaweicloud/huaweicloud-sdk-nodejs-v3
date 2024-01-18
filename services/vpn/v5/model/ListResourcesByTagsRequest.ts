import { QueryResourcesRequestBody } from './QueryResourcesRequestBody';


export class ListResourcesByTagsRequest {
    private 'resource_type'?: ListResourcesByTagsRequestResourceTypeEnum | string;
    public limit?: string;
    public offset?: string;
    public body?: QueryResourcesRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListResourcesByTagsRequestResourceTypeEnum | string): ListResourcesByTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListResourcesByTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListResourcesByTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withLimit(limit: string): ListResourcesByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListResourcesByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: QueryResourcesRequestBody): ListResourcesByTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListResourcesByTagsRequestResourceTypeEnum {
    VPN_GATEWAY = 'vpn-gateway',
    VPN_CONNECTION = 'vpn-connection',
    CUSTOMER_GATEWAY = 'customer-gateway'
}
