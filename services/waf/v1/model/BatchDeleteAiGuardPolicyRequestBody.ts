

export class BatchDeleteAiGuardPolicyRequestBody {
    private 'policy_ids'?: Array<string>;
    public constructor(policyIds?: Array<string>) { 
        this['policy_ids'] = policyIds;
    }
    public withPolicyIds(policyIds: Array<string>): BatchDeleteAiGuardPolicyRequestBody {
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