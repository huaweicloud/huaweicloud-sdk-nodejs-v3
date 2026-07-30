import { BindAgentPolicyRequestInfo } from './BindAgentPolicyRequestInfo';


export class BindAgentPolicyRequest {
    public body?: BindAgentPolicyRequestInfo;
    public constructor() { 
    }
    public withBody(body: BindAgentPolicyRequestInfo): BindAgentPolicyRequest {
        this['body'] = body;
        return this;
    }
}