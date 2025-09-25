

export class AssociateProtectionPolicyRequestInfo {
    private 'target_protection_policy_id'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(targetProtectionPolicyId?: string) { 
        this['target_protection_policy_id'] = targetProtectionPolicyId;
    }
    public withTargetProtectionPolicyId(targetProtectionPolicyId: string): AssociateProtectionPolicyRequestInfo {
        this['target_protection_policy_id'] = targetProtectionPolicyId;
        return this;
    }
    public set targetProtectionPolicyId(targetProtectionPolicyId: string  | undefined) {
        this['target_protection_policy_id'] = targetProtectionPolicyId;
    }
    public get targetProtectionPolicyId(): string | undefined {
        return this['target_protection_policy_id'];
    }
    public withHostIdList(hostIdList: Array<string>): AssociateProtectionPolicyRequestInfo {
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