

export class BatchDeleteCompositeHostsRequestBody {
    private 'host_ids'?: Array<string>;
    private 'keep_policy_enable'?: boolean;
    public constructor() { 
    }
    public withHostIds(hostIds: Array<string>): BatchDeleteCompositeHostsRequestBody {
        this['host_ids'] = hostIds;
        return this;
    }
    public set hostIds(hostIds: Array<string>  | undefined) {
        this['host_ids'] = hostIds;
    }
    public get hostIds(): Array<string> | undefined {
        return this['host_ids'];
    }
    public withKeepPolicyEnable(keepPolicyEnable: boolean): BatchDeleteCompositeHostsRequestBody {
        this['keep_policy_enable'] = keepPolicyEnable;
        return this;
    }
    public set keepPolicyEnable(keepPolicyEnable: boolean  | undefined) {
        this['keep_policy_enable'] = keepPolicyEnable;
    }
    public get keepPolicyEnable(): boolean | undefined {
        return this['keep_policy_enable'];
    }
}