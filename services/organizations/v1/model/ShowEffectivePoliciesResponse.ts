
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEffectivePoliciesResponse extends SdkResponse {
    private 'last_updated_at'?: Date;
    private 'policy_content'?: string;
    private 'policy_type'?: ShowEffectivePoliciesResponsePolicyTypeEnum | string;
    private 'entity_id'?: string;
    public constructor() { 
        super();
    }
    public withLastUpdatedAt(lastUpdatedAt: Date): ShowEffectivePoliciesResponse {
        this['last_updated_at'] = lastUpdatedAt;
        return this;
    }
    public set lastUpdatedAt(lastUpdatedAt: Date  | undefined) {
        this['last_updated_at'] = lastUpdatedAt;
    }
    public get lastUpdatedAt(): Date | undefined {
        return this['last_updated_at'];
    }
    public withPolicyContent(policyContent: string): ShowEffectivePoliciesResponse {
        this['policy_content'] = policyContent;
        return this;
    }
    public set policyContent(policyContent: string  | undefined) {
        this['policy_content'] = policyContent;
    }
    public get policyContent(): string | undefined {
        return this['policy_content'];
    }
    public withPolicyType(policyType: ShowEffectivePoliciesResponsePolicyTypeEnum | string): ShowEffectivePoliciesResponse {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: ShowEffectivePoliciesResponsePolicyTypeEnum | string  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): ShowEffectivePoliciesResponsePolicyTypeEnum | string | undefined {
        return this['policy_type'];
    }
    public withEntityId(entityId: string): ShowEffectivePoliciesResponse {
        this['entity_id'] = entityId;
        return this;
    }
    public set entityId(entityId: string  | undefined) {
        this['entity_id'] = entityId;
    }
    public get entityId(): string | undefined {
        return this['entity_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowEffectivePoliciesResponsePolicyTypeEnum {
    TAG_POLICY = 'tag_policy'
}
