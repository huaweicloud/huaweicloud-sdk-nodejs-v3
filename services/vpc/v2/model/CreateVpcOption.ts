

export class CreateVpcOption {
    public cidr?: string;
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withCidr(cidr: string): CreateVpcOption {
        this['cidr'] = cidr;
        return this;
    }
    public withName(name: string): CreateVpcOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateVpcOption {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateVpcOption {
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