import { UpdateFirewallOption } from './UpdateFirewallOption';


export class UpdateFirewallRequestBody {
    public firewall?: UpdateFirewallOption;
    public constructor(firewall?: UpdateFirewallOption) { 
        this['firewall'] = firewall;
    }
    public withFirewall(firewall: UpdateFirewallOption): UpdateFirewallRequestBody {
        this['firewall'] = firewall;
        return this;
    }
}