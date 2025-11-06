

export class ResponsePermissionInfo {
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'role_name_cn'?: string;
    private 'resource_permissions'?: { [key: string]: object; };
    public constructor() { 
    }
    public withRoleId(roleId: string): ResponsePermissionInfo {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): ResponsePermissionInfo {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withRoleNameCn(roleNameCn: string): ResponsePermissionInfo {
        this['role_name_cn'] = roleNameCn;
        return this;
    }
    public set roleNameCn(roleNameCn: string  | undefined) {
        this['role_name_cn'] = roleNameCn;
    }
    public get roleNameCn(): string | undefined {
        return this['role_name_cn'];
    }
    public withResourcePermissions(resourcePermissions: { [key: string]: object; }): ResponsePermissionInfo {
        this['resource_permissions'] = resourcePermissions;
        return this;
    }
    public set resourcePermissions(resourcePermissions: { [key: string]: object; }  | undefined) {
        this['resource_permissions'] = resourcePermissions;
    }
    public get resourcePermissions(): { [key: string]: object; } | undefined {
        return this['resource_permissions'];
    }
}