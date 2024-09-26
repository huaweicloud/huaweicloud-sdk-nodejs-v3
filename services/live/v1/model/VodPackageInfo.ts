

export class VodPackageInfo {
    private 'packaging_group_id'?: string;
    private 'resource_id'?: string;
    public constructor() { 
    }
    public withPackagingGroupId(packagingGroupId: string): VodPackageInfo {
        this['packaging_group_id'] = packagingGroupId;
        return this;
    }
    public set packagingGroupId(packagingGroupId: string  | undefined) {
        this['packaging_group_id'] = packagingGroupId;
    }
    public get packagingGroupId(): string | undefined {
        return this['packaging_group_id'];
    }
    public withResourceId(resourceId: string): VodPackageInfo {
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