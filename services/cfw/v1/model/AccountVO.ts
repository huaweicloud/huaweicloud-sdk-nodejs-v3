

export class AccountVO {
    private 'account_id'?: string;
    private 'account_name'?: string;
    private 'eip_count_protected'?: number;
    private 'eip_count_total'?: number;
    private 'eip_count_unprotected'?: number;
    private 'organization_id'?: string;
    private 'project_id'?: string;
    private 'project_name'?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): AccountVO {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withAccountName(accountName: string): AccountVO {
        this['account_name'] = accountName;
        return this;
    }
    public set accountName(accountName: string  | undefined) {
        this['account_name'] = accountName;
    }
    public get accountName(): string | undefined {
        return this['account_name'];
    }
    public withEipCountProtected(eipCountProtected: number): AccountVO {
        this['eip_count_protected'] = eipCountProtected;
        return this;
    }
    public set eipCountProtected(eipCountProtected: number  | undefined) {
        this['eip_count_protected'] = eipCountProtected;
    }
    public get eipCountProtected(): number | undefined {
        return this['eip_count_protected'];
    }
    public withEipCountTotal(eipCountTotal: number): AccountVO {
        this['eip_count_total'] = eipCountTotal;
        return this;
    }
    public set eipCountTotal(eipCountTotal: number  | undefined) {
        this['eip_count_total'] = eipCountTotal;
    }
    public get eipCountTotal(): number | undefined {
        return this['eip_count_total'];
    }
    public withEipCountUnprotected(eipCountUnprotected: number): AccountVO {
        this['eip_count_unprotected'] = eipCountUnprotected;
        return this;
    }
    public set eipCountUnprotected(eipCountUnprotected: number  | undefined) {
        this['eip_count_unprotected'] = eipCountUnprotected;
    }
    public get eipCountUnprotected(): number | undefined {
        return this['eip_count_unprotected'];
    }
    public withOrganizationId(organizationId: string): AccountVO {
        this['organization_id'] = organizationId;
        return this;
    }
    public set organizationId(organizationId: string  | undefined) {
        this['organization_id'] = organizationId;
    }
    public get organizationId(): string | undefined {
        return this['organization_id'];
    }
    public withProjectId(projectId: string): AccountVO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): AccountVO {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
}