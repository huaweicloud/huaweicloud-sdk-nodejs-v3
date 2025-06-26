import { UpdateRepoConfigRequestBody } from './UpdateRepoConfigRequestBody';


export class UpdateInstanceRepositoryRequest {
    private 'instance_id'?: string;
    private 'namespace_name'?: string;
    private 'repository_name'?: string;
    public body?: UpdateRepoConfigRequestBody;
    public constructor(instanceId?: string, namespaceName?: string, repositoryName?: string) { 
        this['instance_id'] = instanceId;
        this['namespace_name'] = namespaceName;
        this['repository_name'] = repositoryName;
    }
    public withInstanceId(instanceId: string): UpdateInstanceRepositoryRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withNamespaceName(namespaceName: string): UpdateInstanceRepositoryRequest {
        this['namespace_name'] = namespaceName;
        return this;
    }
    public set namespaceName(namespaceName: string  | undefined) {
        this['namespace_name'] = namespaceName;
    }
    public get namespaceName(): string | undefined {
        return this['namespace_name'];
    }
    public withRepositoryName(repositoryName: string): UpdateInstanceRepositoryRequest {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withBody(body: UpdateRepoConfigRequestBody): UpdateInstanceRepositoryRequest {
        this['body'] = body;
        return this;
    }
}