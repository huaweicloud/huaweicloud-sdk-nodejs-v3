

export class NeutronUpdateFirewallPolicyOption {
    public name?: string;
    public description?: string;
    private 'firewall_rules'?: Array<string> | undefined;
    public audited?: boolean;
    public constructor() { 
    }
    public withName(name: string): NeutronUpdateFirewallPolicyOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): NeutronUpdateFirewallPolicyOption {
        this['description'] = description;
        return this;
    }
    public withFirewallRules(firewallRules: Array<string>): NeutronUpdateFirewallPolicyOption {
        this['firewall_rules'] = firewallRules;
        return this;
    }
    public set firewallRules(firewallRules: Array<string> | undefined) {
        this['firewall_rules'] = firewallRules;
    }
    public get firewallRules() {
        return this['firewall_rules'];
    }
    public withAudited(audited: boolean): NeutronUpdateFirewallPolicyOption {
        this['audited'] = audited;
        return this;
    }
}