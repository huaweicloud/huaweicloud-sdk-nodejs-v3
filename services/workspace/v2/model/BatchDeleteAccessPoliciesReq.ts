

export class BatchDeleteAccessPoliciesReq {
    private 'policy_id_list'?: Array<string>;
    public constructor() { 
    }
    public withPolicyIdList(policyIdList: Array<string>): BatchDeleteAccessPoliciesReq {
        this['policy_id_list'] = policyIdList;
        return this;
    }
    public set policyIdList(policyIdList: Array<string>  | undefined) {
        this['policy_id_list'] = policyIdList;
    }
    public get policyIdList(): Array<string> | undefined {
        return this['policy_id_list'];
    }
}