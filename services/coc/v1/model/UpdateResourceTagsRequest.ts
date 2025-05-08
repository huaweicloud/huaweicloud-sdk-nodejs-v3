import { UpdateResourceTagsRequestBody } from './UpdateResourceTagsRequestBody';


export class UpdateResourceTagsRequest {
    private 'resource_id'?: string;
    private 'resource_type'?: UpdateResourceTagsRequestResourceTypeEnum | string;
    public body?: UpdateResourceTagsRequestBody;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): UpdateResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: UpdateResourceTagsRequestResourceTypeEnum | string): UpdateResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: UpdateResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): UpdateResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withBody(body: UpdateResourceTagsRequestBody): UpdateResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateResourceTagsRequestResourceTypeEnum {
    COCSCRIPT = 'coc:script'
}
