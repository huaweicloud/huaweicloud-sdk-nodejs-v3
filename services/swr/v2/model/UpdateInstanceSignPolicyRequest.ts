import { UpdateSignaturePolicyRequestBody } from './UpdateSignaturePolicyRequestBody';


export class UpdateInstanceSignPolicyRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'policy_id'?: number;
    public body?: UpdateSignaturePolicyRequestBody;
    public constructor(instanceId?: string, namespaceName?: string, policyId?: number) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['policy_id'] = policyId;
    }
    public withInstanceId(instanceId: string): UpdateInstanceSignPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): UpdateInstanceSignPolicyRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withPolicyId(policyId: number): UpdateInstanceSignPolicyRequest {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: number  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): number | undefined {
        return this['policy_id'];
    }
    public withBody(body: UpdateSignaturePolicyRequestBody): UpdateInstanceSignPolicyRequest {
        this['body'] = body;
        return this;
    }
}