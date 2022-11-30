import { NeutronUpdateFirewallGroupOption } from './NeutronUpdateFirewallGroupOption';


export class NeutronUpdateFirewallGroupRequestBody {
    private 'firewall_group': NeutronUpdateFirewallGroupOption | undefined;
    public constructor(firewallGroup?: any) { 
        this['firewall_group'] = firewallGroup;
    }
    public withFirewallGroup(firewallGroup: NeutronUpdateFirewallGroupOption): NeutronUpdateFirewallGroupRequestBody {
        this['firewall_group'] = firewallGroup;
        return this;
    }
    public set firewallGroup(firewallGroup: NeutronUpdateFirewallGroupOption | undefined) {
        this['firewall_group'] = firewallGroup;
    }
    public get firewallGroup() {
        return this['firewall_group'];
    }
}