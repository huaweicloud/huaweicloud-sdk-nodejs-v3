import { RolePrivilegeV5 } from './RolePrivilegeV5';


export class UpdateRepoRolesPrivilegeRequest {
    private 'role_id'?: string;
    public body?: RolePrivilegeV5;
    public constructor(roleId?: string) { 
        this['role_id'] = roleId;
    }
    public withRoleId(roleId: string): UpdateRepoRolesPrivilegeRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withBody(body: RolePrivilegeV5): UpdateRepoRolesPrivilegeRequest {
        this['body'] = body;
        return this;
    }
}