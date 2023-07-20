

export class DeleteCustomPolicyRequest {
    private 'role_id'?: string;
    public constructor(roleId?: string) { 
        this['role_id'] = roleId;
    }
    public withRoleId(roleId: string): DeleteCustomPolicyRequest {
        this['role_id'] = roleId;
        return this;
    }
    public set roleId(roleId: string  | undefined) {
        this['role_id'] = roleId;
    }
    public get roleId(): string | undefined {
        return this['role_id'];
    }
}