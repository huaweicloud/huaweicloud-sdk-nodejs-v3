

export class ShowAccountRequest {
    private 'X-Security-Token'?: string;
    private 'with_register_contact_info'?: boolean;
    private 'account_id'?: string;
    public constructor(accountId?: string) { 
        this['account_id'] = accountId;
    }
    public withXSecurityToken(xSecurityToken: string): ShowAccountRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withWithRegisterContactInfo(withRegisterContactInfo: boolean): ShowAccountRequest {
        this['with_register_contact_info'] = withRegisterContactInfo;
        return this;
    }
    public set withRegisterContactInfo(withRegisterContactInfo: boolean  | undefined) {
        this['with_register_contact_info'] = withRegisterContactInfo;
    }
    public get withRegisterContactInfo(): boolean | undefined {
        return this['with_register_contact_info'];
    }
    public withAccountId(accountId: string): ShowAccountRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}