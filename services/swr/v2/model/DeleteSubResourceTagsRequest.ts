import { DeleteResourceTagsRequestBody } from './DeleteResourceTagsRequestBody';


export class DeleteSubResourceTagsRequest {
    private 'resource_type'?: DeleteSubResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    private 'sub_resource_type'?: DeleteSubResourceTagsRequestSubResourceTypeEnum | string;
    private 'sub_resource_id'?: string;
    public body?: DeleteResourceTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string, subResourceType?: string, subResourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
        this['sub_resource_type'] = subResourceType;
        this['sub_resource_id'] = subResourceId;
    }
    public withResourceType(resourceType: DeleteSubResourceTagsRequestResourceTypeEnum | string): DeleteSubResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteSubResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteSubResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteSubResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withSubResourceType(subResourceType: DeleteSubResourceTagsRequestSubResourceTypeEnum | string): DeleteSubResourceTagsRequest {
        this['sub_resource_type'] = subResourceType;
        return this;
    }
    public set subResourceType(subResourceType: DeleteSubResourceTagsRequestSubResourceTypeEnum | string  | undefined) {
        this['sub_resource_type'] = subResourceType;
    }
    public get subResourceType(): DeleteSubResourceTagsRequestSubResourceTypeEnum | string | undefined {
        return this['sub_resource_type'];
    }
    public withSubResourceId(subResourceId: string): DeleteSubResourceTagsRequest {
        this['sub_resource_id'] = subResourceId;
        return this;
    }
    public set subResourceId(subResourceId: string  | undefined) {
        this['sub_resource_id'] = subResourceId;
    }
    public get subResourceId(): string | undefined {
        return this['sub_resource_id'];
    }
    public withBody(body: DeleteResourceTagsRequestBody): DeleteSubResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteSubResourceTagsRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
/**
    * @export
    * @enum {string}
    */
export enum DeleteSubResourceTagsRequestSubResourceTypeEnum {
    NAMESPACES = 'namespaces'
}
