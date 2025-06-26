

export class ListInstanceAccessoriesRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'repository_name'?: string;
    public reference?: string;
    public offset?: number;
    public limit?: number;
    public type?: ListInstanceAccessoriesRequestTypeEnum | string;
    public constructor(instanceId?: string, namespaceName?: string, repositoryName?: string, reference?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['repository_name'] = repositoryName;
        this['reference'] = reference;
    }
    public withInstanceId(instanceId: string): ListInstanceAccessoriesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): ListInstanceAccessoriesRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepositoryName(repositoryName: string): ListInstanceAccessoriesRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withReference(reference: string): ListInstanceAccessoriesRequest {
        this['reference'] = reference;
        return this;
    }
    public withOffset(offset: number): ListInstanceAccessoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstanceAccessoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withType(type: ListInstanceAccessoriesRequestTypeEnum | string): ListInstanceAccessoriesRequest {
        this['type'] = type;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListInstanceAccessoriesRequestTypeEnum {
    SIGNATURE_COSIGN = 'signature.cosign'
}
