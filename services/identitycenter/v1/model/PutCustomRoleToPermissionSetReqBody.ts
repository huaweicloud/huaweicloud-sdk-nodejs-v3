

export class PutCustomRoleToPermissionSetReqBody {
    private 'custom_role'?: string;
    public constructor(customRole?: string) { 
        this['custom_role'] = customRole;
    }
    public withCustomRole(customRole: string): PutCustomRoleToPermissionSetReqBody {
        this['custom_role'] = customRole;
        return this;
    }
    public set customRole(customRole: string  | undefined) {
        this['custom_role'] = customRole;
    }
    public get customRole(): string | undefined {
        return this['custom_role'];
    }
}