

export class ListVpcsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'enterprise_project_id'?: string;
    public name?: Array<string>;
    public description?: Array<string>;
    public cidr?: Array<string>;
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
    public withId(id: Array<string>): ListVpcsRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListVpcsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withName(name: Array<string>): ListVpcsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListVpcsRequest {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: Array<string>): ListVpcsRequest {
        this['cidr'] = cidr;
        return this;
    }
}