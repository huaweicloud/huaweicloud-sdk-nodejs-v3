import { UpdateAiFirewallConfigRequestBody } from './UpdateAiFirewallConfigRequestBody';


export class UpdateAiFirewallConfigRequest {
    public body?: UpdateAiFirewallConfigRequestBody;
    public constructor() { 
    }
    public withBody(body: UpdateAiFirewallConfigRequestBody): UpdateAiFirewallConfigRequest {
        this['body'] = body;
        return this;
    }
}