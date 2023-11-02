

export class ApigRoleVo {
    private 'role_id'?: string;
    private 'role_code'?: string;
    private 'role_name'?: string;
    public description?: string;
    public constructor() { 
    }
    public withRoleId(roleId: string): ApigRoleVo {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
    public withRoleCode(roleCode: string): ApigRoleVo {
        this['role_code'] = roleCode;
        return this;
    }
    public set roleCode(roleCode: string  | undefined) {
        this['role_code'] = roleCode;
    }
    public get roleCode(): string | undefined {
        return this['role_code'];
    }
    public withRoleName(roleName: string): ApigRoleVo {
        this['role_name'] = roleName;
        return this;
    }
    public set roleName(roleName: string  | undefined) {
        this['role_name'] = roleName;
    }
    public get roleName(): string | undefined {
        return this['role_name'];
    }
    public withDescription(description: string): ApigRoleVo {
        this['description'] = description;
        return this;
    }
}