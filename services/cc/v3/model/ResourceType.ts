

export class ResourceType {
    private 'resource_type'?: ResourceTypeResourceTypeEnum | string;
    public constructor(resourceType?: string) { 
        this['resource_type'] = resourceType;
    }
    public withResourceType(resourceType: ResourceTypeResourceTypeEnum | string): ResourceType {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: ResourceTypeResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): ResourceTypeResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceTypeResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection'
}
