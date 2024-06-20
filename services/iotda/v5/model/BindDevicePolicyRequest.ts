import { BindDevicePolicy } from './BindDevicePolicy';


export class BindDevicePolicyRequest {
    private 'Instance-Id'?: string;
    private 'policy_id'?: string;
    public body?: BindDevicePolicy;
    public constructor(policyId?: string) { 
        this['policy_id'] = policyId;
    }
    public withInstanceId(instanceId: string): BindDevicePolicyRequest {
        this['Instance-Id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['Instance-Id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['Instance-Id'];
    }
    public withPolicyId(policyId: string): BindDevicePolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withBody(body: BindDevicePolicy): BindDevicePolicyRequest {
        this['body'] = body;
        return this;
    }
}