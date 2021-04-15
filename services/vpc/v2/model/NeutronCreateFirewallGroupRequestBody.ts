import { NeutronCreateFirewallGroupOption } from './NeutronCreateFirewallGroupOption';


export class NeutronCreateFirewallGroupRequestBody {
    private 'firewall_group': NeutronCreateFirewallGroupOption | undefined;
    public constructor(firewallGroup?: any) { 
        this['firewall_group'] = firewallGroup;
    }
    public withFirewallGroup(firewallGroup: NeutronCreateFirewallGroupOption): NeutronCreateFirewallGroupRequestBody {
        this['firewall_group'] = firewallGroup;
        return this;
    }
    public set firewallGroup(firewallGroup: NeutronCreateFirewallGroupOption | undefined) {
        this['firewall_group'] = firewallGroup;
    }
    public get firewallGroup() {
        return this['firewall_group'];
    }
}