

export class NeutronCreateFirewallPolicyOption {
    public audited?: boolean;
    public description?: string;
    private 'firewall_rules'?: Array<string> | undefined;
    public name?: string;
    public constructor() { 
    }
    public withAudited(audited: boolean): NeutronCreateFirewallPolicyOption {
        this['audited'] = audited;
        return this;
    }
    public withDescription(description: string): NeutronCreateFirewallPolicyOption {
        this['description'] = description;
        return this;
    }
    public withFirewallRules(firewallRules: Array<string>): NeutronCreateFirewallPolicyOption {
        this['firewall_rules'] = firewallRules;
        return this;
    }
    public set firewallRules(firewallRules: Array<string> | undefined) {
        this['firewall_rules'] = firewallRules;
    }
    public get firewallRules() {
        return this['firewall_rules'];
    }
    public withName(name: string): NeutronCreateFirewallPolicyOption {
        this['name'] = name;
        return this;
    }
}