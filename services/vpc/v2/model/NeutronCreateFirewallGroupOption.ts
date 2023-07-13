

export class NeutronCreateFirewallGroupOption {
    public name?: string;
    public description?: string;
    private 'ingress_firewall_policy_id'?: string | undefined;
    private 'egress_firewall_policy_id'?: string | undefined;
    public ports?: Array<string>;
    private 'admin_state_up'?: boolean | undefined;
    public constructor() { 
    }
    public withName(name: string): NeutronCreateFirewallGroupOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronCreateFirewallGroupOption {
        this['description'] = description;
        return this;
    }
    public withIngressFirewallPolicyId(ingressFirewallPolicyId: string): NeutronCreateFirewallGroupOption {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
        return this;
    }
    public set ingressFirewallPolicyId(ingressFirewallPolicyId: string | undefined) {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
    }
    public get ingressFirewallPolicyId() {
        return this['ingress_firewall_policy_id'];
    }
    public withEgressFirewallPolicyId(egressFirewallPolicyId: string): NeutronCreateFirewallGroupOption {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
        return this;
    }
    public set egressFirewallPolicyId(egressFirewallPolicyId: string | undefined) {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
    }
    public get egressFirewallPolicyId() {
        return this['egress_firewall_policy_id'];
    }
    public withPorts(ports: Array<string>): NeutronCreateFirewallGroupOption {
        this['ports'] = ports;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronCreateFirewallGroupOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
}