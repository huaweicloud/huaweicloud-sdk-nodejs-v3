import { CreateFirewallTagRequestBody } from './CreateFirewallTagRequestBody';


export class CreateFirewallTagRequest {
    private 'firewall_id'?: string;
    public body?: CreateFirewallTagRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): CreateFirewallTagRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: CreateFirewallTagRequestBody): CreateFirewallTagRequest {
        this['body'] = body;
        return this;
    }
}