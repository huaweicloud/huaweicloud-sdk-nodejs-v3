

export class ListSystemConfigsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public type?: string;
    public constructor(type?: string) { 
        this['type'] = type;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSystemConfigsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListSystemConfigsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSystemConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: string): ListSystemConfigsRequest {
        this['type'] = type;
        return this;
    }
}