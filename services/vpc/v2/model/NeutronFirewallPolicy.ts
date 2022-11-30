

export class NeutronFirewallPolicy {
    public audited: boolean;
    public description: string;
    private 'firewall_rules': Array<string> | undefined;
    public id: string;
    public name: string;
    private 'public': boolean | undefined;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    public constructor(audited?: any, description?: any, firewallRules?: any, id?: any, name?: any, _public?: any, tenantId?: any, projectId?: any) { 
        this['audited'] = audited;
        this['description'] = description;
        this['firewall_rules'] = firewallRules;
        this['id'] = id;
        this['name'] = name;
        this['public'] = _public;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
    }
    public withAudited(audited: boolean): NeutronFirewallPolicy {
        this['audited'] = audited;
        return this;
    }
    public withDescription(description: string): NeutronFirewallPolicy {
        this['description'] = description;
        return this;
    }
    public withFirewallRules(firewallRules: Array<string>): NeutronFirewallPolicy {
        this['firewall_rules'] = firewallRules;
        return this;
    }
    public set firewallRules(firewallRules: Array<string> | undefined) {
        this['firewall_rules'] = firewallRules;
    }
    public get firewallRules() {
        return this['firewall_rules'];
    }
    public withId(id: string): NeutronFirewallPolicy {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronFirewallPolicy {
        this['name'] = name;
        return this;
    }
    public withPublic(_public: boolean): NeutronFirewallPolicy {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean | undefined) {
        this['public'] = _public;
    }
    public get _public() {
        return this['public'];
    }
    public withTenantId(tenantId: string): NeutronFirewallPolicy {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronFirewallPolicy {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
}