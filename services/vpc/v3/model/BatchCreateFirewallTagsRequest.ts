import { BatchCreateFirewallTagsRequestBody } from './BatchCreateFirewallTagsRequestBody';


export class BatchCreateFirewallTagsRequest {
    private 'firewall_id'?: string;
    public body?: BatchCreateFirewallTagsRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): BatchCreateFirewallTagsRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: BatchCreateFirewallTagsRequestBody): BatchCreateFirewallTagsRequest {
        this['body'] = body;
        return this;
    }
}