import { ListResourceInstancesRequestBody } from './ListResourceInstancesRequestBody';


export class ShowSubResourceInstancesCountRequest {
    private 'resource_type'?: ShowSubResourceInstancesCountRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'sub_resource_type'?: ShowSubResourceInstancesCountRequestSubResourceTypeEnum | string;
    public body?: ListResourceInstancesRequestBody;
    public constructor(resourceType?: string, resourceId?: string, subResourceType?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['sub_resource_type'] = subResourceType;
    }
    public withResourceType(resourceType: ShowSubResourceInstancesCountRequestResourceTypeEnum | string): ShowSubResourceInstancesCountRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ShowSubResourceInstancesCountRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ShowSubResourceInstancesCountRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ShowSubResourceInstancesCountRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSubResourceType(subResourceType: ShowSubResourceInstancesCountRequestSubResourceTypeEnum | string): ShowSubResourceInstancesCountRequest {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: ShowSubResourceInstancesCountRequestSubResourceTypeEnum | string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): ShowSubResourceInstancesCountRequestSubResourceTypeEnum | string | undefined {
        return this['sub_resource_type'];
    }
    public withBody(body: ListResourceInstancesRequestBody): ShowSubResourceInstancesCountRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSubResourceInstancesCountRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSubResourceInstancesCountRequestSubResourceTypeEnum {
    NAMESPACES = 'namespaces'
}
