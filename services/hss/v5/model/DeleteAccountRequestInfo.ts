

export class DeleteAccountRequestInfo {
    private 'organization_id'?: string;
    private 'account_id'?: string;
    private 'project_id'?: string;
    public constructor(organizationId?: string, accountId?: string, projectId?: string) { 
        this['organization_id'] = organizationId;
        this['account_id'] = accountId;
        this['project_id'] = projectId;
    }
    public withOrganizationId(organizationId: string): DeleteAccountRequestInfo {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withAccountId(accountId: string): DeleteAccountRequestInfo {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withProjectId(projectId: string): DeleteAccountRequestInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}