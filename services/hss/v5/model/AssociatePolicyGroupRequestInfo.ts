

export class AssociatePolicyGroupRequestInfo {
    private 'target_policy_group_id'?: string;
    private 'operate_all'?: boolean;
    private 'host_id_list'?: Array<string>;
    public constructor(targetPolicyGroupId?: string) { 
        this['target_policy_group_id'] = targetPolicyGroupId;
    }
    public withTargetPolicyGroupId(targetPolicyGroupId: string): AssociatePolicyGroupRequestInfo {
        this['target_policy_group_id'] = targetPolicyGroupId;
        return this;
    }
    public set targetPolicyGroupId(targetPolicyGroupId: string  | undefined) {
        this['target_policy_group_id'] = targetPolicyGroupId;
    }
    public get targetPolicyGroupId(): string | undefined {
        return this['target_policy_group_id'];
    }
    public withOperateAll(operateAll: boolean): AssociatePolicyGroupRequestInfo {
        this['operate_all'] = operateAll;
        return this;
    }
    public set operateAll(operateAll: boolean  | undefined) {
        this['operate_all'] = operateAll;
    }
    public get operateAll(): boolean | undefined {
        return this['operate_all'];
    }
    public withHostIdList(hostIdList: Array<string>): AssociatePolicyGroupRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}