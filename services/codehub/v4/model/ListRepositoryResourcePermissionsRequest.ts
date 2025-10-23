

export class ListRepositoryResourcePermissionsRequest {
    private 'repository_id'?: number;
    private 'resource_name'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryId?: number, resourceName?: string) { 
        this['repository_id'] = repositoryId;
        this['resource_name'] = resourceName;
    }
    public withRepositoryId(repositoryId: number): ListRepositoryResourcePermissionsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withResourceName(resourceName: string): ListRepositoryResourcePermissionsRequest {
        this['resource_name'] = resourceName;
        return this;
    }
    public set resourceName(resourceName: string  | undefined) {
        this['resource_name'] = resourceName;
    }
    public get resourceName(): string | undefined {
        return this['resource_name'];
    }
    public withOffset(offset: number): ListRepositoryResourcePermissionsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRepositoryResourcePermissionsRequest {
        this['limit'] = limit;
        return this;
    }
}