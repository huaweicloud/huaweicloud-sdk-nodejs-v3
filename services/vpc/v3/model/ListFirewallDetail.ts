import { FirewallAssociation } from './FirewallAssociation';
import { ResourceTag } from './ResourceTag';


export class ListFirewallDetail {
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
    public constructor(id?: string, name?: string, description?: string, projectId?: string, createdAt?: string, updatedAt?: string, adminStateUp?: boolean, status?: string, enterpriseProjectId?: string, tags?: Array<ResourceTag>, associations?: Array<FirewallAssociation>) { 
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
    }
    public withId(id: string): ListFirewallDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ListFirewallDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListFirewallDetail {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): ListFirewallDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: string): ListFirewallDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): ListFirewallDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withAdminStateUp(adminStateUp: boolean): ListFirewallDetail {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: string): ListFirewallDetail {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListFirewallDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): ListFirewallDetail {
        this['tags'] = tags;
        return this;
    }
    public withAssociations(associations: Array<FirewallAssociation>): ListFirewallDetail {
        this['associations'] = associations;
        return this;
    }
}