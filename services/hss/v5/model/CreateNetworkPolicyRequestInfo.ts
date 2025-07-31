import { NetworkPolicyBody } from './NetworkPolicyBody';


export class CreateNetworkPolicyRequestInfo {
    public name?: string;
    public namespace?: string;
    private 'policy_content'?: NetworkPolicyBody;
    public constructor(policyContent?: NetworkPolicyBody) { 
        this['policy_content'] = policyContent;
    }
    public withName(name: string): CreateNetworkPolicyRequestInfo {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): CreateNetworkPolicyRequestInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicyContent(policyContent: NetworkPolicyBody): CreateNetworkPolicyRequestInfo {
        this['policy_content'] = policyContent;
        return this;
    }
    public set policyContent(policyContent: NetworkPolicyBody  | undefined) {
        this['policy_content'] = policyContent;
    }
    public get policyContent(): NetworkPolicyBody | undefined {
        return this['policy_content'];
    }
}