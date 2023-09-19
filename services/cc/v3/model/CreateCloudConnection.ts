

export class CreateCloudConnection {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateCloudConnection {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateCloudConnection {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateCloudConnection {
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