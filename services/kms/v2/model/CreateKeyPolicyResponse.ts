
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateKeyPolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): CreateKeyPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
}