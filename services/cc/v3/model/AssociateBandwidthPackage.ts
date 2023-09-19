

export class AssociateBandwidthPackage {
    private 'resource_id'?: string;
    private 'resource_type'?: AssociateBandwidthPackageResourceTypeEnum | string;
    public constructor(resourceId?: string, resourceType?: string) { 
        this['resource_id'] = resourceId;
        this['resource_type'] = resourceType;
    }
    public withResourceId(resourceId: string): AssociateBandwidthPackage {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withResourceType(resourceType: AssociateBandwidthPackageResourceTypeEnum | string): AssociateBandwidthPackage {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: AssociateBandwidthPackageResourceTypeEnum | string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): AssociateBandwidthPackageResourceTypeEnum | string | undefined {
        return this['resource_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AssociateBandwidthPackageResourceTypeEnum {
    CLOUD_CONNECTION = 'cloud_connection'
}
