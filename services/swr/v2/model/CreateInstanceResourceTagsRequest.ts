import { CreateResourceTagsRequestBody } from './CreateResourceTagsRequestBody';


export class CreateInstanceResourceTagsRequest {
    private 'resource_type'?: CreateInstanceResourceTagsRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: CreateResourceTagsRequestBody;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: CreateInstanceResourceTagsRequestResourceTypeEnum | string): CreateInstanceResourceTagsRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateInstanceResourceTagsRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateInstanceResourceTagsRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateInstanceResourceTagsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateResourceTagsRequestBody): CreateInstanceResourceTagsRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateInstanceResourceTagsRequestResourceTypeEnum {
    INSTANCES = 'instances'
}
