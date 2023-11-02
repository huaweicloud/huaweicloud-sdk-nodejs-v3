

export class ApigRole {
    private 'role_id'?: string;
    public constructor() { 
    }
    public withRoleId(roleId: string): ApigRole {
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