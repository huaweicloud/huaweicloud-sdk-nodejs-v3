

export class UserPolicyResponeEntity {
    private 'resource_type'?: string;
    private 'resource_name'?: string;
    private 'pattern_type'?: string;
    private 'access_policy'?: string;
    private 'acl_permission_type'?: string;
    public constructor() { 
    }
    public withResourceType(resourceType: string): UserPolicyResponeEntity {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: string  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): string | undefined {
        return this['resource_type'];
    }
    public withResourceName(resourceName: string): UserPolicyResponeEntity {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withPatternType(patternType: string): UserPolicyResponeEntity {
        this['pattern_type'] = patternType;
        return this;
    }
    public set patternType(patternType: string  | undefined) {
        this['pattern_type'] = patternType;
    }
    public get patternType(): string | undefined {
        return this['pattern_type'];
    }
    public withAccessPolicy(accessPolicy: string): UserPolicyResponeEntity {
        this['access_policy'] = accessPolicy;
        return this;
    }
    public set accessPolicy(accessPolicy: string  | undefined) {
        this['access_policy'] = accessPolicy;
    }
    public get accessPolicy(): string | undefined {
        return this['access_policy'];
    }
    public withAclPermissionType(aclPermissionType: string): UserPolicyResponeEntity {
        this['acl_permission_type'] = aclPermissionType;
        return this;
    }
    public set aclPermissionType(aclPermissionType: string  | undefined) {
        this['acl_permission_type'] = aclPermissionType;
    }
    public get aclPermissionType(): string | undefined {
        return this['acl_permission_type'];
    }
}