

export class ListClusterProtectionInfoRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListClusterProtectionInfoRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListClusterProtectionInfoRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListClusterProtectionInfoRequest {
        this['limit'] = limit;
        return this;
    }
}