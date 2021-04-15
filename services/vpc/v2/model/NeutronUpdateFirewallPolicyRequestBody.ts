import { NeutronUpdateFirewallPolicyOption } from './NeutronUpdateFirewallPolicyOption';


export class NeutronUpdateFirewallPolicyRequestBody {
    private 'firewall_policy': NeutronUpdateFirewallPolicyOption | undefined;
    public constructor(firewallPolicy?: any) { 
        this['firewall_policy'] = firewallPolicy;
    }
    public withFirewallPolicy(firewallPolicy: NeutronUpdateFirewallPolicyOption): NeutronUpdateFirewallPolicyRequestBody {
        this['firewall_policy'] = firewallPolicy;
        return this;
    }
    public set firewallPolicy(firewallPolicy: NeutronUpdateFirewallPolicyOption | undefined) {
        this['firewall_policy'] = firewallPolicy;
    }
    public get firewallPolicy() {
        return this['firewall_policy'];
    }
}