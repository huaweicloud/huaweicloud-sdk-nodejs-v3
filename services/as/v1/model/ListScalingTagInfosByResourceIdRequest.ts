

export class ListScalingTagInfosByResourceIdRequest {
    private 'resource_type'?: ListScalingTagInfosByResourceIdRequestResourceTypeEnum | string;
    private 'resource_id'?: string;
    public constructor(resourceType?: string, resourceId?: string) { 
        this['resource_type'] = resourceType;
        this['resource_id'] = resourceId;
    }
    public withResourceType(resourceType: ListScalingTagInfosByResourceIdRequestResourceTypeEnum | string): ListScalingTagInfosByResourceIdRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListScalingTagInfosByResourceIdRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListScalingTagInfosByResourceIdRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
    public withResourceId(resourceId: string): ListScalingTagInfosByResourceIdRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingTagInfosByResourceIdRequestResourceTypeEnum {
    SCALING_GROUP_TAG = 'scaling_group_tag'
}
