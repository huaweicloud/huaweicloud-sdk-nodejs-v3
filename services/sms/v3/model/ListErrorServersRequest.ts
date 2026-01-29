

export class ListErrorServersRequest {
    public limit?: number;
    public offset?: number;
    private 'enterprise_project_id'?: string;
    public constructor(offset?: number) { 
        this['offset'] = offset;
    }
    public withLimit(limit: number): ListErrorServersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListErrorServersRequest {
        this['offset'] = offset;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListErrorServersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}