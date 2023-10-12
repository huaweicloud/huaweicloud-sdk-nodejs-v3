import { ListTagResourceInstancesRequestBody } from './ListTagResourceInstancesRequestBody';


export class ListTagResourceInstancesRequest {
    private 'resource_type'?: ListTagResourceInstancesRequestResourceTypeEnum | string;
    public body?: ListTagResourceInstancesRequestBody;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListTagResourceInstancesRequestResourceTypeEnum | string): ListTagResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListTagResourceInstancesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListTagResourceInstancesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: ListTagResourceInstancesRequestBody): ListTagResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListTagResourceInstancesRequestResourceTypeEnum {
    DC_DIRECTCONNECT = 'dc-directconnect',
    DC_VGW = 'dc-vgw',
    DC_VIF = 'dc-vif'
}
