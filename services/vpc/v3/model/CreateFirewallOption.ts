import { ResourceTag } from './ResourceTag';


export class CreateFirewallOption {
    public name?: string;
    public description?: string;
    private 'enterprise_project_id'?: string;
    public tags?: Array<ResourceTag>;
    private 'admin_state_up'?: boolean;
    public type?: string;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CreateFirewallOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateFirewallOption {
        this['description'] = description;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateFirewallOption {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTags(tags: Array<ResourceTag>): CreateFirewallOption {
        this['tags'] = tags;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateFirewallOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withType(type: string): CreateFirewallOption {
        this['type'] = type;
        return this;
    }
}