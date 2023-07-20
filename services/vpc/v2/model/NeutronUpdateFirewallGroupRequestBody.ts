import { NeutronUpdateFirewallGroupOption } from './NeutronUpdateFirewallGroupOption';


export class NeutronUpdateFirewallGroupRequestBody {
    private 'firewall_group'?: NeutronUpdateFirewallGroupOption;
    public constructor(firewallGroup?: NeutronUpdateFirewallGroupOption) { 
        this['firewall_group'] = firewallGroup;
    }
    public withFirewallGroup(firewallGroup: NeutronUpdateFirewallGroupOption): NeutronUpdateFirewallGroupRequestBody {
        this['firewall_group'] = firewallGroup;
        return this;
    }
    public set firewallGroup(firewallGroup: NeutronUpdateFirewallGroupOption  | undefined) {
        this['firewall_group'] = firewallGroup;
    }
    public get firewallGroup(): NeutronUpdateFirewallGroupOption | undefined {
        return this['firewall_group'];
    }
}