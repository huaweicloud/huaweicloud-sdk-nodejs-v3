import { CreateFirewallRequestBody } from './CreateFirewallRequestBody';


export class CreateFirewallRequest {
    public body?: CreateFirewallRequestBody;
    public constructor() { 
    }
    public withBody(body: CreateFirewallRequestBody): CreateFirewallRequest {
        this['body'] = body;
        return this;
    }
}