

export class UploadPackageGroupDetailsResp {
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'resource_type'?: string;
    private 'is_async'?: boolean;
    private 'resource_name'?: string;
    public status?: string;
    private 'underlying_name'?: string;
    public constructor(createTime?: number, resourceType?: string) { 
        this['create_time'] = createTime;
        this['resource_type'] = resourceType;
    }
    public withCreateTime(createTime: number): UploadPackageGroupDetailsResp {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): UploadPackageGroupDetailsResp {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withResourceType(resourceType: string): UploadPackageGroupDetailsResp {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withIsAsync(isAsync: boolean): UploadPackageGroupDetailsResp {
        this['is_async'] = isAsync;
        return this;
    }
    public set isAsync(isAsync: boolean  | undefined) {
        this['is_async'] = isAsync;
    }
    public get isAsync(): boolean | undefined {
        return this['is_async'];
    }
    public withResourceName(resourceName: string): UploadPackageGroupDetailsResp {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withStatus(status: string): UploadPackageGroupDetailsResp {
        this['status'] = status;
        return this;
    }
    public withUnderlyingName(underlyingName: string): UploadPackageGroupDetailsResp {
        this['underlying_name'] = underlyingName;
        return this;
    }
    public set underlyingName(underlyingName: string  | undefined) {
        this['underlying_name'] = underlyingName;
    }
    public get underlyingName(): string | undefined {
        return this['underlying_name'];
    }
}