

export class ListInferApiKeysRequest {
    public scope?: string;
    private 'service_id'?: string;
    public name?: string;
    private 'service_name'?: string;
    private 'key_id'?: string;
    public limit?: number;
    public offset?: number;
    private 'workspace_id'?: string;
    private 'with_user_scope'?: boolean;
    public constructor() { 
    }
    public withScope(scope: string): ListInferApiKeysRequest {
        this['scope'] = scope;
        return this;
    }
    public withServiceId(serviceId: string): ListInferApiKeysRequest {
        this['service_id'] = serviceId;
        return this;
    }
    public set serviceId(serviceId: string  | undefined) {
        this['service_id'] = serviceId;
    }
    public get serviceId(): string | undefined {
        return this['service_id'];
    }
    public withName(name: string): ListInferApiKeysRequest {
        this['name'] = name;
        return this;
    }
    public withServiceName(serviceName: string): ListInferApiKeysRequest {
        this['service_name'] = serviceName;
        return this;
    }
    public set serviceName(serviceName: string  | undefined) {
        this['service_name'] = serviceName;
    }
    public get serviceName(): string | undefined {
        return this['service_name'];
    }
    public withKeyId(keyId: string): ListInferApiKeysRequest {
        this['key_id'] = keyId;
        return this;
    }
    public set keyId(keyId: string  | undefined) {
        this['key_id'] = keyId;
    }
    public get keyId(): string | undefined {
        return this['key_id'];
    }
    public withLimit(limit: number): ListInferApiKeysRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListInferApiKeysRequest {
        this['offset'] = offset;
        return this;
    }
    public withWorkspaceId(workspaceId: string): ListInferApiKeysRequest {
        this['workspace_id'] = workspaceId;
        return this;
    }
    public set workspaceId(workspaceId: string  | undefined) {
        this['workspace_id'] = workspaceId;
    }
    public get workspaceId(): string | undefined {
        return this['workspace_id'];
    }
    public withWithUserScope(withUserScope: boolean): ListInferApiKeysRequest {
        this['with_user_scope'] = withUserScope;
        return this;
    }
    public set withUserScope(withUserScope: boolean  | undefined) {
        this['with_user_scope'] = withUserScope;
    }
    public get withUserScope(): boolean | undefined {
        return this['with_user_scope'];
    }
}