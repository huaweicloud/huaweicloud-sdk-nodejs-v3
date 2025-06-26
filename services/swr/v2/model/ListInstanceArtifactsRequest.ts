

export class ListInstanceArtifactsRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'repository_name'?: string;
    public offset?: number;
    public limit?: number;
    public type?: ListInstanceArtifactsRequestTypeEnum | string;
    public tags?: string;
    public constructor(instanceId?: string, namespaceName?: string, repositoryName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['repository_name'] = repositoryName;
    }
    public withInstanceId(instanceId: string): ListInstanceArtifactsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): ListInstanceArtifactsRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepositoryName(repositoryName: string): ListInstanceArtifactsRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withOffset(offset: number): ListInstanceArtifactsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceArtifactsRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ListInstanceArtifactsRequestTypeEnum | string): ListInstanceArtifactsRequest {
        this['type'] = type;
        return this;
    }
    public withTags(tags: string): ListInstanceArtifactsRequest {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceArtifactsRequestTypeEnum {
    IMAGE = 'IMAGE',
    CHART = 'CHART'
}
