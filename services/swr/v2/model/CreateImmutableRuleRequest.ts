import { CreateImmutableRuleBody } from './CreateImmutableRuleBody';


export class CreateImmutableRuleRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    public body?: CreateImmutableRuleBody;
    public constructor(instanceId?: string, namespaceName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
    }
    public withInstanceId(instanceId: string): CreateImmutableRuleRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): CreateImmutableRuleRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withBody(body: CreateImmutableRuleBody): CreateImmutableRuleRequest {
        this['body'] = body;
        return this;
    }
}