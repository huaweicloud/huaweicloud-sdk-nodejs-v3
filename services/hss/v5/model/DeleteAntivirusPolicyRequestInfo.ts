

export class DeleteAntivirusPolicyRequestInfo {
    private 'policy_ids'?: Array<string>;
    public constructor() { 
    }
    public withPolicyIds(policyIds: Array<string>): DeleteAntivirusPolicyRequestInfo {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}