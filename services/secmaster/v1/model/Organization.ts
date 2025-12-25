

export class Organization {
    private 'account_id'?: string;
    private 'organization_id'?: string;
    public constructor(accountId?: string, organizationId?: string) { 
        this['account_id'] = accountId;
        this['organization_id'] = organizationId;
    }
    public withAccountId(accountId: string): Organization {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withOrganizationId(organizationId: string): Organization {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
}