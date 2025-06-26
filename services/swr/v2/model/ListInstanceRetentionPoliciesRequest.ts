

export class ListInstanceRetentionPoliciesRequest {
    private 'instance_id'?: string;
    public name?: string;
    private 'namespace_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListInstanceRetentionPoliciesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withName(name: string): ListInstanceRetentionPoliciesRequest {
        this['name'] = name;
        return this;
    }
    public withNamespaceId(namespaceId: number): ListInstanceRetentionPoliciesRequest {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withOffset(offset: number): ListInstanceRetentionPoliciesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceRetentionPoliciesRequest {
        this['limit'] = limit;
        return this;
    }
}