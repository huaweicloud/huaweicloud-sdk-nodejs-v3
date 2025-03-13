

export class ResourcePolicyItem {
    private 'resource_id'?: string;
    private 'resource_name'?: string;
    private 'resource_type'?: ResourcePolicyItemResourceTypeEnum | string;
    public constructor(resourceId?: string, resourceName?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_name'] = resourceName;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): ResourcePolicyItem {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceName(resourceName: string): ResourcePolicyItem {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withResourceType(resourceType: ResourcePolicyItemResourceTypeEnum | string): ResourcePolicyItem {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourcePolicyItemResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourcePolicyItemResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourcePolicyItemResourceTypeEnum {
    DATA_CONNECTION = 'DATA_CONNECTION',
    AGENCY = 'AGENCY'
}
