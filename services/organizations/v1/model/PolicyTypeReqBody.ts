

export class PolicyTypeReqBody {
    private 'policy_type'?: PolicyTypeReqBodyPolicyTypeEnum | string;
    private 'root_id'?: string;
    public constructor(policyType?: string, rootId?: string) { 
        this['policy_type'] = policyType;
        this['root_id'] = rootId;
    }
    public withPolicyType(policyType: PolicyTypeReqBodyPolicyTypeEnum | string): PolicyTypeReqBody {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: PolicyTypeReqBodyPolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): PolicyTypeReqBodyPolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
    public withRootId(rootId: string): PolicyTypeReqBody {
        this['root_id'] = rootId;
        return this;
    }
    public set rootId(rootId: string  | undefined) {
        this['root_id'] = rootId;
    }
    public get rootId(): string | undefined {
        return this['root_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PolicyTypeReqBodyPolicyTypeEnum {
    SERVICE_CONTROL_POLICY = 'service_control_policy',
    TAG_POLICY = 'tag_policy'
}
