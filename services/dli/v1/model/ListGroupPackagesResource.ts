

export class ListGroupPackagesResource {
    private 'create_time'?: number;
    private 'update_time'?: number;
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    public status?: string;
    private 'underlying_name'?: string;
    public owner?: string;
    public constructor() { 
    }
    public withCreateTime(createTime: number): ListGroupPackagesResource {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: number): ListGroupPackagesResource {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withResourceType(resourceType: string): ListGroupPackagesResource {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): ListGroupPackagesResource {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withStatus(status: string): ListGroupPackagesResource {
        this['status'] = status;
        return this;
    }
    public withUnderlyingName(underlyingName: string): ListGroupPackagesResource {
        this['underlying_name'] = underlyingName;
        return this;
    }
    public set underlyingName(underlyingName: string  | undefined) {
        this['underlying_name'] = underlyingName;
    }
    public get underlyingName(): string | undefined {
        return this['underlying_name'];
    }
    public withOwner(owner: string): ListGroupPackagesResource {
        this['owner'] = owner;
        return this;
    }
}