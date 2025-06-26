import { CreateSignaturePolicyRequestBody } from './CreateSignaturePolicyRequestBody';


export class CreateInstanceSignPolicyRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    public body?: CreateSignaturePolicyRequestBody;
    public constructor(instanceId?: string, namespaceName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
    }
    public withInstanceId(instanceId: string): CreateInstanceSignPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): CreateInstanceSignPolicyRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withBody(body: CreateSignaturePolicyRequestBody): CreateInstanceSignPolicyRequest {
        this['body'] = body;
        return this;
    }
}