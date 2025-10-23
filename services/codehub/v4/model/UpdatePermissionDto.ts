import { UpdatePermissionDetail } from './UpdatePermissionDetail';


export class UpdatePermissionDto {
    private 'role_id'?: string;
    private 'role_name'?: string;
    public permissions?: Array<UpdatePermissionDetail>;
    public constructor() { 
    }
    public withRoleId(roleId: string): UpdatePermissionDto {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleName(roleName: string): UpdatePermissionDto {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withPermissions(permissions: Array<UpdatePermissionDetail>): UpdatePermissionDto {
        this['permissions'] = permissions;
        return this;
    }
}