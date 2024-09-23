

export class ShowCreateAccountStatusRequest {
    private 'X-Security-Token'?: string;
    private 'create_account_status_id'?: string;
    public constructor(createAccountStatusId?: string) { 
        this['create_account_status_id'] = createAccountStatusId;
    }
    public withXSecurityToken(xSecurityToken: string): ShowCreateAccountStatusRequest {
        this['X-Security-Token'] = xSecurityToken;
        return this;
    }
    public set xSecurityToken(xSecurityToken: string  | undefined) {
        this['X-Security-Token'] = xSecurityToken;
    }
    public get xSecurityToken(): string | undefined {
        return this['X-Security-Token'];
    }
    public withCreateAccountStatusId(createAccountStatusId: string): ShowCreateAccountStatusRequest {
        this['create_account_status_id'] = createAccountStatusId;
        return this;
    }
    public set createAccountStatusId(createAccountStatusId: string  | undefined) {
        this['create_account_status_id'] = createAccountStatusId;
    }
    public get createAccountStatusId(): string | undefined {
        return this['create_account_status_id'];
    }
}