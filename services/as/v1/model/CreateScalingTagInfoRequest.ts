import { CreateTagsOption } from './CreateTagsOption';


export class CreateScalingTagInfoRequest {
    private 'resource_type'?: CreateScalingTagInfoRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public body?: CreateTagsOption;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: CreateScalingTagInfoRequestResourceTypeEnum | string): CreateScalingTagInfoRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: CreateScalingTagInfoRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): CreateScalingTagInfoRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): CreateScalingTagInfoRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withBody(body: CreateTagsOption): CreateScalingTagInfoRequest {
        this['body'] = body;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateScalingTagInfoRequestResourceTypeEnum {
    SCALING_GROUP_TAG = 'scaling_group_tag'
}
