

export class NeutronFirewallGroup {
    public id: string;
    public name: string;
    public description: string;
    private 'admin_state_up': boolean | undefined;
    private 'egress_firewall_policy_id': string | undefined;
    private 'ingress_firewall_policy_id': string | undefined;
    public ports: Array<string>;
    private 'public': boolean | undefined;
    public status: string;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(id?: any, name?: any, description?: any, adminStateUp?: any, egressFirewallPolicyId?: any, ingressFirewallPolicyId?: any, ports?: any, _public?: any, status?: any, tenantId?: any, projectId?: any, createdAt?: any, updatedAt?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['admin_state_up'] = adminStateUp;
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
        this['ports'] = ports;
        this['public'] = _public;
        this['status'] = status;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): NeutronFirewallGroup {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronFirewallGroup {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronFirewallGroup {
        this['description'] = description;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronFirewallGroup {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withEgressFirewallPolicyId(egressFirewallPolicyId: string): NeutronFirewallGroup {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
        return this;
    }
    public set egressFirewallPolicyId(egressFirewallPolicyId: string | undefined) {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
    }
    public get egressFirewallPolicyId() {
        return this['egress_firewall_policy_id'];
    }
    public withIngressFirewallPolicyId(ingressFirewallPolicyId: string): NeutronFirewallGroup {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
        return this;
    }
    public set ingressFirewallPolicyId(ingressFirewallPolicyId: string | undefined) {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
    }
    public get ingressFirewallPolicyId() {
        return this['ingress_firewall_policy_id'];
    }
    public withPorts(ports: Array<string>): NeutronFirewallGroup {
        this['ports'] = ports;
        return this;
    }
    public withPublic(_public: boolean): NeutronFirewallGroup {
        this['public'] = _public;
        return this;
    }
    public set _public(_public: boolean | undefined) {
        this['public'] = _public;
    }
    public get _public() {
        return this['public'];
    }
    public withStatus(status: string): NeutronFirewallGroup {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): NeutronFirewallGroup {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronFirewallGroup {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronFirewallGroup {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronFirewallGroup {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}