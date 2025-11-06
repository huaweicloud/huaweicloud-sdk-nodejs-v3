

export class RepositoryStatisticsDto {
    private 'commit_count'?: number;
    private 'storage_size'?: number;
    private 'repository_size'?: number;
    private 'lfs_objects_size'?: number;
    private 'tenant_repo_size_limit'?: number;
    public constructor() { 
    }
    public withCommitCount(commitCount: number): RepositoryStatisticsDto {
        this['commit_count'] = commitCount;
        return this;
    }
    public set commitCount(commitCount: number  | undefined) {
        this['commit_count'] = commitCount;
    }
    public get commitCount(): number | undefined {
        return this['commit_count'];
    }
    public withStorageSize(storageSize: number): RepositoryStatisticsDto {
        this['storage_size'] = storageSize;
        return this;
    }
    public set storageSize(storageSize: number  | undefined) {
        this['storage_size'] = storageSize;
    }
    public get storageSize(): number | undefined {
        return this['storage_size'];
    }
    public withRepositorySize(repositorySize: number): RepositoryStatisticsDto {
        this['repository_size'] = repositorySize;
        return this;
    }
    public set repositorySize(repositorySize: number  | undefined) {
        this['repository_size'] = repositorySize;
    }
    public get repositorySize(): number | undefined {
        return this['repository_size'];
    }
    public withLfsObjectsSize(lfsObjectsSize: number): RepositoryStatisticsDto {
        this['lfs_objects_size'] = lfsObjectsSize;
        return this;
    }
    public set lfsObjectsSize(lfsObjectsSize: number  | undefined) {
        this['lfs_objects_size'] = lfsObjectsSize;
    }
    public get lfsObjectsSize(): number | undefined {
        return this['lfs_objects_size'];
    }
    public withTenantRepoSizeLimit(tenantRepoSizeLimit: number): RepositoryStatisticsDto {
        this['tenant_repo_size_limit'] = tenantRepoSizeLimit;
        return this;
    }
    public set tenantRepoSizeLimit(tenantRepoSizeLimit: number  | undefined) {
        this['tenant_repo_size_limit'] = tenantRepoSizeLimit;
    }
    public get tenantRepoSizeLimit(): number | undefined {
        return this['tenant_repo_size_limit'];
    }
}