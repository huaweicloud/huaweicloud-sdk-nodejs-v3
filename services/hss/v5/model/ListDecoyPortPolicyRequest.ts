

export class ListDecoyPortPolicyRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(offset?: number, limit?: number) { 
        this['offset'] = offset;
        this['limit'] = limit;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListDecoyPortPolicyRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListDecoyPortPolicyRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListDecoyPortPolicyRequest {
        this['limit'] = limit;
        return this;
    }
}