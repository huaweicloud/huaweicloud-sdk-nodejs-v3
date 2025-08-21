import { ResourcePermissionDto } from './ResourcePermissionDto';


export class PermissionDto {
    public order?: number;
    private 'role_id'?: string;
    private 'role_name'?: string;
    private 'role_name_cn'?: string;
    private 'resource_permissions'?: { [key: string]: ResourcePermissionDto; };
    public constructor() { 
    }
    public withOrder(order: number): PermissionDto {
        this['order'] = order;
        return this;
    }
    public withRoleId(roleId: string): PermissionDto {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): PermissionDto {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withRoleNameCn(roleNameCn: string): PermissionDto {
        this['role_name_cn'] = roleNameCn;
        return this;
    }
    public set roleNameCn(roleNameCn: string  | undefined) {
        this['role_name_cn'] = roleNameCn;
    }
    public get roleNameCn(): string | undefined {
        return this['role_name_cn'];
    }
    public withResourcePermissions(resourcePermissions: { [key: string]: ResourcePermissionDto; }): PermissionDto {
        this['resource_permissions'] = resourcePermissions;
        return this;
    }
    public set resourcePermissions(resourcePermissions: { [key: string]: ResourcePermissionDto; }  | undefined) {
        this['resource_permissions'] = resourcePermissions;
    }
    public get resourcePermissions(): { [key: string]: ResourcePermissionDto; } | undefined {
        return this['resource_permissions'];
    }
}