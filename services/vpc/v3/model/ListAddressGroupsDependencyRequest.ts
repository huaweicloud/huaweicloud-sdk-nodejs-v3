

export class ListAddressGroupsDependencyRequest {
    public id?: string;
    private 'enterprise_project_id'?: string;
    public constructor() { 
    }
    public withId(id: string): ListAddressGroupsDependencyRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListAddressGroupsDependencyRequest {
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