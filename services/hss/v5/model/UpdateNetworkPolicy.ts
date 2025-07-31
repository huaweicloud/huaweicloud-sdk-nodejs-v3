import { NetworkPolicyBody } from './NetworkPolicyBody';


export class UpdateNetworkPolicy {
    private 'policy_id'?: string;
    public name?: string;
    public namespace?: string;
    private 'policy_content'?: NetworkPolicyBody;
    public constructor(policyId?: string, policyContent?: NetworkPolicyBody) { 
        this['policy_id'] = policyId;
        this['policy_content'] = policyContent;
    }
    public withPolicyId(policyId: string): UpdateNetworkPolicy {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withName(name: string): UpdateNetworkPolicy {
        this['name'] = name;
        return this;
    }
    public withNamespace(namespace: string): UpdateNetworkPolicy {
        this['namespace'] = namespace;
        return this;
    }
    public withPolicyContent(policyContent: NetworkPolicyBody): UpdateNetworkPolicy {
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