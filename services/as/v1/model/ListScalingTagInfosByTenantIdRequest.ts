

export class ListScalingTagInfosByTenantIdRequest {
    private 'resource_type'?: ListScalingTagInfosByTenantIdRequestResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ListScalingTagInfosByTenantIdRequestResourceTypeEnum | string): ListScalingTagInfosByTenantIdRequest {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ListScalingTagInfosByTenantIdRequestResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ListScalingTagInfosByTenantIdRequestResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListScalingTagInfosByTenantIdRequestResourceTypeEnum {
    SCALING_GROUP_TAG = 'scaling_group_tag'
}
