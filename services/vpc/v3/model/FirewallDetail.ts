import { FirewallAssociation } from './FirewallAssociation';
import { FirewallRuleDetail } from './FirewallRuleDetail';
import { ResourceTag } from './ResourceTag';


export class FirewallDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'project_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'admin_state_up'?: boolean;
    public status?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    public associations?: Array<FirewallAssociation>;
    private 'ingress_rules'?: Array<FirewallRuleDetail>;
    private 'egress_rules'?: Array<FirewallRuleDetail>;
    public type?: string;
    public constructor(id?: string, name?: string, description?: string, projectId?: string, createdAt?: string, updatedAt?: string, adminStateUp?: boolean, status?: string, enterpriseProjectId?: string, tags?: Array<ResourceTag>, associations?: Array<FirewallAssociation>, ingressRules?: Array<FirewallRuleDetail>, egressRules?: Array<FirewallRuleDetail>, type?: string) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['admin_state_up'] = adminStateUp;
        this['status'] = status;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tags'] = tags;
        this['associations'] = associations;
        this['ingress_rules'] = ingressRules;
        this['egress_rules'] = egressRules;
        this['type'] = type;
    }
    public withId(id: string): FirewallDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): FirewallDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): FirewallDetail {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): FirewallDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): FirewallDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): FirewallDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withAdminStateUp(adminStateUp: boolean): FirewallDetail {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: string): FirewallDetail {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): FirewallDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): FirewallDetail {
        this['tags'] = tags;
        return this;
    }
    public withAssociations(associations: Array<FirewallAssociation>): FirewallDetail {
        this['associations'] = associations;
        return this;
    }
    public withIngressRules(ingressRules: Array<FirewallRuleDetail>): FirewallDetail {
        this['ingress_rules'] = ingressRules;
        return this;
    }
    public set ingressRules(ingressRules: Array<FirewallRuleDetail>  | undefined) {
        this['ingress_rules'] = ingressRules;
    }
    public get ingressRules(): Array<FirewallRuleDetail> | undefined {
        return this['ingress_rules'];
    }
    public withEgressRules(egressRules: Array<FirewallRuleDetail>): FirewallDetail {
        this['egress_rules'] = egressRules;
        return this;
    }
    public set egressRules(egressRules: Array<FirewallRuleDetail>  | undefined) {
        this['egress_rules'] = egressRules;
    }
    public get egressRules(): Array<FirewallRuleDetail> | undefined {
        return this['egress_rules'];
    }
    public withType(type: string): FirewallDetail {
        this['type'] = type;
        return this;
    }
}