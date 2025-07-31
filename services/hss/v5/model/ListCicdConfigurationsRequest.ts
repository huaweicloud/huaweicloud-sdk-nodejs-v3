

export class ListCicdConfigurationsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'cicd_name'?: string;
    private 'cicd_id'?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListCicdConfigurationsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListCicdConfigurationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListCicdConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCicdName(cicdName: string): ListCicdConfigurationsRequest {
        this['cicd_name'] = cicdName;
        return this;
    }
    public set cicdName(cicdName: string  | undefined) {
        this['cicd_name'] = cicdName;
    }
    public get cicdName(): string | undefined {
        return this['cicd_name'];
    }
    public withCicdId(cicdId: string): ListCicdConfigurationsRequest {
        this['cicd_id'] = cicdId;
        return this;
    }
    public set cicdId(cicdId: string  | undefined) {
        this['cicd_id'] = cicdId;
    }
    public get cicdId(): string | undefined {
        return this['cicd_id'];
    }
}