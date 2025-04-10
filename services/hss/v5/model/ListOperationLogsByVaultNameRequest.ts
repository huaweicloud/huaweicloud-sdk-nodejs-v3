

export class ListOperationLogsByVaultNameRequest {
    private 'enterprise_project_id'?: string;
    public status?: string;
    private 'resource_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'last_days'?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListOperationLogsByVaultNameRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withStatus(status: string): ListOperationLogsByVaultNameRequest {
        this['status'] = status;
        return this;
    }
    public withResourceName(resourceName: string): ListOperationLogsByVaultNameRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withOffset(offset: number): ListOperationLogsByVaultNameRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOperationLogsByVaultNameRequest {
        this['limit'] = limit;
        return this;
    }
    public withLastDays(lastDays: number): ListOperationLogsByVaultNameRequest {
        this['last_days'] = lastDays;
        return this;
    }
    public set lastDays(lastDays: number  | undefined) {
        this['last_days'] = lastDays;
    }
    public get lastDays(): number | undefined {
        return this['last_days'];
    }
}