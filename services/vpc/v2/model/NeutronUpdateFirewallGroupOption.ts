

export class NeutronUpdateFirewallGroupOption {
    private 'admin_state_up'?: boolean;
    public description?: string;
    private 'egress_firewall_policy_id'?: string;
    private 'ingress_firewall_policy_id'?: string;
    public name?: string;
    public ports?: Array<string>;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronUpdateFirewallGroupOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withDescription(description: string): NeutronUpdateFirewallGroupOption {
        this['description'] = description;
        return this;
    }
    public withEgressFirewallPolicyId(egressFirewallPolicyId: string): NeutronUpdateFirewallGroupOption {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
        return this;
    }
    public set egressFirewallPolicyId(egressFirewallPolicyId: string  | undefined) {
        this['egress_firewall_policy_id'] = egressFirewallPolicyId;
    }
    public get egressFirewallPolicyId(): string | undefined {
        return this['egress_firewall_policy_id'];
    }
    public withIngressFirewallPolicyId(ingressFirewallPolicyId: string): NeutronUpdateFirewallGroupOption {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
        return this;
    }
    public set ingressFirewallPolicyId(ingressFirewallPolicyId: string  | undefined) {
        this['ingress_firewall_policy_id'] = ingressFirewallPolicyId;
    }
    public get ingressFirewallPolicyId(): string | undefined {
        return this['ingress_firewall_policy_id'];
    }
    public withName(name: string): NeutronUpdateFirewallGroupOption {
        this['name'] = name;
        return this;
    }
    public withPorts(ports: Array<string>): NeutronUpdateFirewallGroupOption {
        this['ports'] = ports;
        return this;
    }
}