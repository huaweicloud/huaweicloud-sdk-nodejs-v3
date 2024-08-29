

export class AddAccountsRequestInfo {
    private 'organization_id'?: string;
    private 'account_id'?: string;
    private 'account_name'?: string;
    public constructor(organizationId?: string, accountId?: string, accountName?: string) { 
        this['organization_id'] = organizationId;
        this['account_id'] = accountId;
        this['account_name'] = accountName;
    }
    public withOrganizationId(organizationId: string): AddAccountsRequestInfo {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withAccountId(accountId: string): AddAccountsRequestInfo {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): AddAccountsRequestInfo {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
}