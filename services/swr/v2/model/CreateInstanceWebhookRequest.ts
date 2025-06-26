import { CreateWebhookPolicyRequestBody } from './CreateWebhookPolicyRequestBody';


export class CreateInstanceWebhookRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    public body?: CreateWebhookPolicyRequestBody;
    public constructor(instanceId?: string, namespaceName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
    }
    public withInstanceId(instanceId: string): CreateInstanceWebhookRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): CreateInstanceWebhookRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withBody(body: CreateWebhookPolicyRequestBody): CreateInstanceWebhookRequest {
        this['body'] = body;
        return this;
    }
}