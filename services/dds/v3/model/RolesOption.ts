

export class RolesOption {
    private 'role_db_name'?: string;
    private 'role_name'?: string;
    public constructor(roleDbName?: string, roleName?: string) { 
        this['role_db_name'] = roleDbName;
        this['role_name'] = roleName;
    }
    public withRoleDbName(roleDbName: string): RolesOption {
        this['role_db_name'] = roleDbName;
        return this;
    }
    public set roleDbName(roleDbName: string  | undefined) {
        this['role_db_name'] = roleDbName;
    }
    public get roleDbName(): string | undefined {
        return this['role_db_name'];
    }
    public withRoleName(roleName: string): RolesOption {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
}