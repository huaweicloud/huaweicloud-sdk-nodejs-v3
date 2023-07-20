import { NeutronCreateFirewallPolicyOption } from './NeutronCreateFirewallPolicyOption';


export class NeutronCreateFirewallPolicyRequestBody {
    private 'firewall_policy'?: NeutronCreateFirewallPolicyOption;
    public constructor(firewallPolicy?: NeutronCreateFirewallPolicyOption) { 
        this['firewall_policy'] = firewallPolicy;
    }
    public withFirewallPolicy(firewallPolicy: NeutronCreateFirewallPolicyOption): NeutronCreateFirewallPolicyRequestBody {
        this['firewall_policy'] = firewallPolicy;
        return this;
    }
    public set firewallPolicy(firewallPolicy: NeutronCreateFirewallPolicyOption  | undefined) {
        this['firewall_policy'] = firewallPolicy;
    }
    public get firewallPolicy(): NeutronCreateFirewallPolicyOption | undefined {
        return this['firewall_policy'];
    }
}