

export class ListSecurityGroupsRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    public name?: Array<string>;
    public description?: Array<string>;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): ListSecurityGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecurityGroupsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListSecurityGroupsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListSecurityGroupsRequest {
        this['name'] = name;
        return this;
    }
    public withDescription(description: Array<string>): ListSecurityGroupsRequest {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSecurityGroupsRequest {
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