

export class ListInternetRequest {
    private 'enterprise_project_id'?: string;
    private 'nat_name'?: string;
    public eip?: string;
    public constructor() { 
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListInternetRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withNatName(natName: string): ListInternetRequest {
        this['nat_name'] = natName;
        return this;
    }
    public set natName(natName: string  | undefined) {
        this['nat_name'] = natName;
    }
    public get natName(): string | undefined {
        return this['nat_name'];
    }
    public withEip(eip: string): ListInternetRequest {
        this['eip'] = eip;
        return this;
    }
}