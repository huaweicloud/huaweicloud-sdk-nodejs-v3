import { ListFirewallsByTagsRequestBody } from './ListFirewallsByTagsRequestBody';


export class ListFirewallsByTagsRequest {
    public limit?: number;
    public offset?: number;
    public body?: ListFirewallsByTagsRequestBody;
    public constructor() { 
    }
    public withLimit(limit: number): ListFirewallsByTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListFirewallsByTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withBody(body: ListFirewallsByTagsRequestBody): ListFirewallsByTagsRequest {
        this['body'] = body;
        return this;
    }
}