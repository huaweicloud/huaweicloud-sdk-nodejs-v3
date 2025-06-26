import { CreateResourceTagsRequestBody } from './CreateResourceTagsRequestBody';


export class CreateSubResourceTagsRequest {
    private 'resource_type'?: CreateSubResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'sub_resource_type'?: CreateSubResourceTagsRequestSubResourceTypeEnum | string;
    private 'sub_resource_id'?: string;
    public body?: CreateResourceTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string, subResourceType?: string, subResourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['sub_resource_type'] = subResourceType;
        this['sub_resource_id'] = subResourceId;
    }
    public withResourceType(resourceType: CreateSubResourceTagsRequestResourceTypeEnum | string): CreateSubResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateSubResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateSubResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateSubResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSubResourceType(subResourceType: CreateSubResourceTagsRequestSubResourceTypeEnum | string): CreateSubResourceTagsRequest {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: CreateSubResourceTagsRequestSubResourceTypeEnum | string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): CreateSubResourceTagsRequestSubResourceTypeEnum | string | undefined {
        return this['sub_resource_type'];
    }
    public withSubResourceId(subResourceId: string): CreateSubResourceTagsRequest {
        this['sub_resource_id'] = subResourceId;
        return this;
    }
    public set subResourceId(subResourceId: string  | undefined) {
        this['sub_resource_id'] = subResourceId;
    }
    public get subResourceId(): string | undefined {
        return this['sub_resource_id'];
    }
    public withBody(body: CreateResourceTagsRequestBody): CreateSubResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateSubResourceTagsRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
/**
    * @export
    * @enum {string}
    */
export enum CreateSubResourceTagsRequestSubResourceTypeEnum {
    NAMESPACES = 'namespaces'
}
