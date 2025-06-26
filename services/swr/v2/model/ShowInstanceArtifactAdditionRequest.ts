

export class ShowInstanceArtifactAdditionRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'repository_name'?: string;
    public reference?: string;
    public addition?: ShowInstanceArtifactAdditionRequestAdditionEnum | string;
    public constructor(instanceId?: string, namespaceName?: string, repositoryName?: string, reference?: string, addition?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['repository_name'] = repositoryName;
        this['reference'] = reference;
        this['addition'] = addition;
    }
    public withInstanceId(instanceId: string): ShowInstanceArtifactAdditionRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): ShowInstanceArtifactAdditionRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepositoryName(repositoryName: string): ShowInstanceArtifactAdditionRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withReference(reference: string): ShowInstanceArtifactAdditionRequest {
        this['reference'] = reference;
        return this;
    }
    public withAddition(addition: ShowInstanceArtifactAdditionRequestAdditionEnum | string): ShowInstanceArtifactAdditionRequest {
        this['addition'] = addition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceArtifactAdditionRequestAdditionEnum {
    BUILD_HISTORY = 'build_history'
}
