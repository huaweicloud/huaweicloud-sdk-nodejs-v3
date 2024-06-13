import { BatchDeleteFirewallTagsRequestBody } from './BatchDeleteFirewallTagsRequestBody';


export class BatchDeleteFirewallTagsRequest {
    private 'firewall_id'?: string;
    public body?: BatchDeleteFirewallTagsRequestBody;
    public constructor(firewallId?: string) { 
        this['firewall_id'] = firewallId;
    }
    public withFirewallId(firewallId: string): BatchDeleteFirewallTagsRequest {
        this['firewall_id'] = firewallId;
        return this;
    }
    public set firewallId(firewallId: string  | undefined) {
        this['firewall_id'] = firewallId;
    }
    public get firewallId(): string | undefined {
        return this['firewall_id'];
    }
    public withBody(body: BatchDeleteFirewallTagsRequestBody): BatchDeleteFirewallTagsRequest {
        this['body'] = body;
        return this;
    }
}