import { DeleteResourceTagsRequestBody } from './DeleteResourceTagsRequestBody';


export class DeleteInstanceResourceTagsRequest {
    private 'resource_type'?: DeleteInstanceResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: DeleteResourceTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: DeleteInstanceResourceTagsRequestResourceTypeEnum | string): DeleteInstanceResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: DeleteInstanceResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): DeleteInstanceResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): DeleteInstanceResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: DeleteResourceTagsRequestBody): DeleteInstanceResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeleteInstanceResourceTagsRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
