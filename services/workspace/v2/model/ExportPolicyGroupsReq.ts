

export class ExportPolicyGroupsReq {
    private 'policy_group_ids'?: Array<string>;
    public constructor(policyGroupIds?: Array<string>) { 
        this['policy_group_ids'] = policyGroupIds;
    }
    public withPolicyGroupIds(policyGroupIds: Array<string>): ExportPolicyGroupsReq {
        this['policy_group_ids'] = policyGroupIds;
        return this;
    }
    public set policyGroupIds(policyGroupIds: Array<string>  | undefined) {
        this['policy_group_ids'] = policyGroupIds;
    }
    public get policyGroupIds(): Array<string> | undefined {
        return this['policy_group_ids'];
    }
}