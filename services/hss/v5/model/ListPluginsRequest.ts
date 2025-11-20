

export class ListPluginsRequest {
    private 'enterprise_project_id'?: string;
    public offset?: number;
    public limit?: number;
    public code?: string;
    public name?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPluginsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withOffset(offset: number): ListPluginsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPluginsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCode(code: string): ListPluginsRequest {
        this['code'] = code;
        return this;
    }
    public withName(name: string): ListPluginsRequest {
        this['name'] = name;
        return this;
    }
}