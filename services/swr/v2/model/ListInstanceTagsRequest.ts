

export class ListInstanceTagsRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'repository_name'?: string;
    public offset?: number;
    public limit?: number;
    private 'is_accessory'?: boolean;
    public constructor(instanceId?: string, namespaceName?: string, repositoryName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['repository_name'] = repositoryName;
    }
    public withInstanceId(instanceId: string): ListInstanceTagsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): ListInstanceTagsRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepositoryName(repositoryName: string): ListInstanceTagsRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withOffset(offset: number): ListInstanceTagsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceTagsRequest {
        this['limit'] = limit;
        return this;
    }
    public withIsAccessory(isAccessory: boolean): ListInstanceTagsRequest {
        this['is_accessory'] = isAccessory;
        return this;
    }
    public set isAccessory(isAccessory: boolean  | undefined) {
        this['is_accessory'] = isAccessory;
    }
    public get isAccessory(): boolean | undefined {
        return this['is_accessory'];
    }
}