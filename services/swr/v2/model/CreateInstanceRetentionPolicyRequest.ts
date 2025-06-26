import { CreateRetentionPolicyRequestBody } from './CreateRetentionPolicyRequestBody';


export class CreateInstanceRetentionPolicyRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    public body?: CreateRetentionPolicyRequestBody;
    public constructor(instanceId?: string, namespaceName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
    }
    public withInstanceId(instanceId: string): CreateInstanceRetentionPolicyRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): CreateInstanceRetentionPolicyRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withBody(body: CreateRetentionPolicyRequestBody): CreateInstanceRetentionPolicyRequest {
        this['body'] = body;
        return this;
    }
}