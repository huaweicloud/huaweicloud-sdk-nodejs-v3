

export class ShowVulWhiteListDetailRequest {
    private 'enterprise_project_id'?: string;
    public id?: string;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ShowVulWhiteListDetailRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withId(id: string): ShowVulWhiteListDetailRequest {
        this['id'] = id;
        return this;
    }
}