import { AssociateSubnetFirewallRequestBody } from './AssociateSubnetFirewallRequestBody';


export class AssociateSubnetFirewallRequest {
    private 'firewall_id'?: string;
    public body?: AssociateSubnetFirewallRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): AssociateSubnetFirewallRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: AssociateSubnetFirewallRequestBody): AssociateSubnetFirewallRequest {
        this['body'] = body;
        return this;
    }
}