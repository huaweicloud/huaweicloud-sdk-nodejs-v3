import { NeutronCreateFirewallPolicyOption } from './NeutronCreateFirewallPolicyOption';


export class NeutronCreateFirewallPolicyRequestBody {
    private 'firewall_policy': NeutronCreateFirewallPolicyOption | undefined;
    public constructor(firewallPolicy?: any) { 
        this['firewall_policy'] = firewallPolicy;
    }
    public withFirewallPolicy(firewallPolicy: NeutronCreateFirewallPolicyOption): NeutronCreateFirewallPolicyRequestBody {
        this['firewall_policy'] = firewallPolicy;
        return this;
    }
    public set firewallPolicy(firewallPolicy: NeutronCreateFirewallPolicyOption | undefined) {
        this['firewall_policy'] = firewallPolicy;
    }
    public get firewallPolicy() {
        return this['firewall_policy'];
    }
}