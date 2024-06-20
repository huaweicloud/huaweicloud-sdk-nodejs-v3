import { DevicePolicyBindOrUnbindFailureDetail } from './DevicePolicyBindOrUnbindFailureDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UnbindDevicePolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    private 'target_type'?: string;
    private 'success_targets'?: Array<string>;
    private 'failure_targets'?: Array<DevicePolicyBindOrUnbindFailureDetail>;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): UnbindDevicePolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withTargetType(targetType: string): UnbindDevicePolicyResponse {
        this['target_type'] = targetType;
        return this;
    }
    public set targetType(targetType: string  | undefined) {
        this['target_type'] = targetType;
    }
    public get targetType(): string | undefined {
        return this['target_type'];
    }
    public withSuccessTargets(successTargets: Array<string>): UnbindDevicePolicyResponse {
        this['success_targets'] = successTargets;
        return this;
    }
    public set successTargets(successTargets: Array<string>  | undefined) {
        this['success_targets'] = successTargets;
    }
    public get successTargets(): Array<string> | undefined {
        return this['success_targets'];
    }
    public withFailureTargets(failureTargets: Array<DevicePolicyBindOrUnbindFailureDetail>): UnbindDevicePolicyResponse {
        this['failure_targets'] = failureTargets;
        return this;
    }
    public set failureTargets(failureTargets: Array<DevicePolicyBindOrUnbindFailureDetail>  | undefined) {
        this['failure_targets'] = failureTargets;
    }
    public get failureTargets(): Array<DevicePolicyBindOrUnbindFailureDetail> | undefined {
        return this['failure_targets'];
    }
}