

export class PermissionSummary {
    public id?: string;
    public name?: string;
    private 'resource_type'?: string;
    private 'is_resource_type_default'?: boolean;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'permission_urn'?: string;
    private 'permission_type'?: string;
    private 'default_version'?: boolean;
    public version?: number;
    public status?: string;
    public constructor(id?: string, name?: string, resourceType?: string, isResourceTypeDefault?: boolean, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['name'] = name;
        this['resource_type'] = resourceType;
        this['is_resource_type_default'] = isResourceTypeDefault;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): PermissionSummary {
        this['id'] = id;
        return this;
    }
    public withName(name: string): PermissionSummary {
        this['name'] = name;
        return this;
    }
    public withResourceType(resourceType: string): PermissionSummary {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withIsResourceTypeDefault(isResourceTypeDefault: boolean): PermissionSummary {
        this['is_resource_type_default'] = isResourceTypeDefault;
        return this;
    }
    public set isResourceTypeDefault(isResourceTypeDefault: boolean  | undefined) {
        this['is_resource_type_default'] = isResourceTypeDefault;
    }
    public get isResourceTypeDefault(): boolean | undefined {
        return this['is_resource_type_default'];
    }
    public withCreatedAt(createdAt: Date): PermissionSummary {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PermissionSummary {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withPermissionUrn(permissionUrn: string): PermissionSummary {
        this['permission_urn'] = permissionUrn;
        return this;
    }
    public set permissionUrn(permissionUrn: string  | undefined) {
        this['permission_urn'] = permissionUrn;
    }
    public get permissionUrn(): string | undefined {
        return this['permission_urn'];
    }
    public withPermissionType(permissionType: string): PermissionSummary {
        this['permission_type'] = permissionType;
        return this;
    }
    public set permissionType(permissionType: string  | undefined) {
        this['permission_type'] = permissionType;
    }
    public get permissionType(): string | undefined {
        return this['permission_type'];
    }
    public withDefaultVersion(defaultVersion: boolean): PermissionSummary {
        this['default_version'] = defaultVersion;
        return this;
    }
    public set defaultVersion(defaultVersion: boolean  | undefined) {
        this['default_version'] = defaultVersion;
    }
    public get defaultVersion(): boolean | undefined {
        return this['default_version'];
    }
    public withVersion(version: number): PermissionSummary {
        this['version'] = version;
        return this;
    }
    public withStatus(status: string): PermissionSummary {
        this['status'] = status;
        return this;
    }
}