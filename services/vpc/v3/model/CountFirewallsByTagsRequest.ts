import { CountFirewallsByTagsRequestBody } from './CountFirewallsByTagsRequestBody';


export class CountFirewallsByTagsRequest {
    public body?: CountFirewallsByTagsRequestBody;
    public constructor() { 
    }
    public withBody(body: CountFirewallsByTagsRequestBody): CountFirewallsByTagsRequest {
        this['body'] = body;
        return this;
    }
}