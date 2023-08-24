import { DisassociateSubnetFirewallRequestBody } from './DisassociateSubnetFirewallRequestBody';


export class DisassociateSubnetFirewallRequest {
    private 'firewall_id'?: string;
    public body?: DisassociateSubnetFirewallRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): DisassociateSubnetFirewallRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: DisassociateSubnetFirewallRequestBody): DisassociateSubnetFirewallRequest {
        this['body'] = body;
        return this;
    }
}