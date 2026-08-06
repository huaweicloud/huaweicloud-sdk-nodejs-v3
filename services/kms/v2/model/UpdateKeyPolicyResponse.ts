import { UpdateKeyPolicyResponseBodyPolicy } from './UpdateKeyPolicyResponseBodyPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateKeyPolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    public policy?: UpdateKeyPolicyResponseBodyPolicy;
    public description?: string;
    private 'last_modify_time'?: string;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): UpdateKeyPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicy(policy: UpdateKeyPolicyResponseBodyPolicy): UpdateKeyPolicyResponse {
        this['policy'] = policy;
        return this;
    }
    public withDescription(description: string): UpdateKeyPolicyResponse {
        this['description'] = description;
        return this;
    }
    public withLastModifyTime(lastModifyTime: string): UpdateKeyPolicyResponse {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): string | undefined {
        return this['last_modify_time'];
    }
}