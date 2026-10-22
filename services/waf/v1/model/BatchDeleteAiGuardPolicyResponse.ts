
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchDeleteAiGuardPolicyResponse extends SdkResponse {
    private 'policy_ids'?: Array<string>;
    public constructor() { 
        super();
    }
    public withPolicyIds(policyIds: Array<string>): BatchDeleteAiGuardPolicyResponse {
        this['policy_ids'] = policyIds;
        return this;
    }
    public set policyIds(policyIds: Array<string>  | undefined) {
        this['policy_ids'] = policyIds;
    }
    public get policyIds(): Array<string> | undefined {
        return this['policy_ids'];
    }
}