

export class ListImmutableRulesRequest {
    private 'instance_id'?: string;
    private 'namespace_id'?: number;
    public offset?: number;
    public limit?: number;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListImmutableRulesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceId(namespaceId: number): ListImmutableRulesRequest {
        this['namespace_id'] = namespaceId;
        return this;
    }
    public set namespaceId(namespaceId: number  | undefined) {
        this['namespace_id'] = namespaceId;
    }
    public get namespaceId(): number | undefined {
        return this['namespace_id'];
    }
    public withOffset(offset: number): ListImmutableRulesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListImmutableRulesRequest {
        this['limit'] = limit;
        return this;
    }
}