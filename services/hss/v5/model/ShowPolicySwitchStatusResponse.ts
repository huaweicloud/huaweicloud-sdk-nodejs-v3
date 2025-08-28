
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPolicySwitchStatusResponse extends SdkResponse {
    private 'policy_name'?: string;
    public enable?: boolean;
    public constructor() { 
        super();
    }
    public withPolicyName(policyName: string): ShowPolicySwitchStatusResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withEnable(enable: boolean): ShowPolicySwitchStatusResponse {
        this['enable'] = enable;
        return this;
    }
}