

export class CreateSecurityGroupOption {
    public name: string;
    private 'vpc_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor(name?: any) { 
        this['name'] = name;
    }
    public withName(name: string): CreateSecurityGroupOption {
        this['name'] = name;
        return this;
    }
    public withVpcId(vpcId: string): CreateSecurityGroupOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateSecurityGroupOption {
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