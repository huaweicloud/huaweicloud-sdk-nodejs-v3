

export class ShowEffectivePoliciesRequest {
    private 'entity_id'?: string;
    private 'policy_type'?: ShowEffectivePoliciesRequestPolicyTypeEnum | string;
    public constructor(entityId?: string, policyType?: string) { 
        this['entity_id'] = entityId;
        this['policy_type'] = policyType;
    }
    public withEntityId(entityId: string): ShowEffectivePoliciesRequest {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
    public withPolicyType(policyType: ShowEffectivePoliciesRequestPolicyTypeEnum | string): ShowEffectivePoliciesRequest {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: ShowEffectivePoliciesRequestPolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): ShowEffectivePoliciesRequestPolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEffectivePoliciesRequestPolicyTypeEnum {
    TAG_POLICY = 'tag_policy'
}
