

export class ShowInstanceTagRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'repository_name'?: string;
    private 'tag_name'?: string;
    public constructor(instanceId?: string, namespaceName?: string, repositoryName?: string, tagName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['repository_name'] = repositoryName;
        this['tag_name'] = tagName;
    }
    public withInstanceId(instanceId: string): ShowInstanceTagRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): ShowInstanceTagRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepositoryName(repositoryName: string): ShowInstanceTagRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withTagName(tagName: string): ShowInstanceTagRequest {
        this['tag_name'] = tagName;
        return this;
    }
    public set tagName(tagName: string  | undefined) {
        this['tag_name'] = tagName;
    }
    public get tagName(): string | undefined {
        return this['tag_name'];
    }
}