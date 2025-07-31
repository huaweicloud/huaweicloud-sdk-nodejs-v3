

export class AppPolicyInfoList {
    private 'policy_id'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor() { 
    }
    public withPolicyId(policyId: string): AppPolicyInfoList {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withHostIdList(hostIdList: Array<string>): AppPolicyInfoList {
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