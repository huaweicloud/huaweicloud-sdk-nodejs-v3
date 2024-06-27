

export class ListFirewallTagsRequest {
    public limit?: number;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListFirewallTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFirewallTagsRequest {
        this['offset'] = offset;
        return this;
    }
}