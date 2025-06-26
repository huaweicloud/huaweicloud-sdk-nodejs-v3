import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ListSubResourceInstancesRequest {
    private 'resource_type'?: ListSubResourceInstancesRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'sub_resource_type'?: ListSubResourceInstancesRequestSubResourceTypeEnum | string;
    public offset?: number;
    public limit?: number;
    public body?: ListResourceInstancesRequestBody;
    public constructor(resourceType?: string, resourceId?: string, subResourceType?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['sub_resource_type'] = subResourceType;
    }
    public withResourceType(resourceType: ListSubResourceInstancesRequestResourceTypeEnum | string): ListSubResourceInstancesRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListSubResourceInstancesRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListSubResourceInstancesRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListSubResourceInstancesRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSubResourceType(subResourceType: ListSubResourceInstancesRequestSubResourceTypeEnum | string): ListSubResourceInstancesRequest {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: ListSubResourceInstancesRequestSubResourceTypeEnum | string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): ListSubResourceInstancesRequestSubResourceTypeEnum | string | undefined {
        return this['sub_resource_type'];
    }
    public withOffset(offset: number): ListSubResourceInstancesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubResourceInstancesRequest {
        this['limit'] = limit;
        return this;
    }
    public withBody(body: ListResourceInstancesRequestBody): ListSubResourceInstancesRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListSubResourceInstancesRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
/**
    * @export
    * @enum {string}
    */
export enum ListSubResourceInstancesRequestSubResourceTypeEnum {
    NAMESPACES = 'namespaces'
}
