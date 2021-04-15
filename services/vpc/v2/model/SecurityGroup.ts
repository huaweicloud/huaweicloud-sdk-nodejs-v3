import { SecurityGroupRule } from './SecurityGroupRule';


export class SecurityGroup {
    public name: string;
    public description?: string;
    public id: string;
    private 'vpc_id'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    private 'security_group_rules': Array<SecurityGroupRule> | undefined;
    public constructor(name?: any, id?: any, securityGroupRules?: any) { 
        this['name'] = name;
        this['id'] = id;
        this['security_group_rules'] = securityGroupRules;
    }
    public withName(name: string): SecurityGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): SecurityGroup {
        this['description'] = description;
        return this;
    }
    public withId(id: string): SecurityGroup {
        this['id'] = id;
        return this;
    }
    public withVpcId(vpcId: string): SecurityGroup {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): SecurityGroup {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
    }
    public withSecurityGroupRules(securityGroupRules: Array<SecurityGroupRule>): SecurityGroup {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<SecurityGroupRule> | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules() {
        return this['security_group_rules'];
    }
}