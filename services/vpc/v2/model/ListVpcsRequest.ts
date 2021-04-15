

export class ListVpcsRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListVpcsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListVpcsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): ListVpcsRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVpcsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
}