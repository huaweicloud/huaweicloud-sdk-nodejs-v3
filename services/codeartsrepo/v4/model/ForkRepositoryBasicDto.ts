

export class ForkRepositoryBasicDto {
    public namespace?: string;
    public path?: string;
    private 'develop_mode'?: string;
    public visibility?: string;
    public security?: string;
    private 'star_count'?: number;
    private 'forks_count'?: number;
    private 'open_merge_requests_count'?: number;
    public starred?: boolean;
    private 'name_with_namespace'?: string;
    private 'last_activity_at'?: string;
    private 'created_at'?: string;
    public constructor() { 
    }
    public withNamespace(namespace: string): ForkRepositoryBasicDto {
        this['namespace'] = namespace;
        return this;
    }
    public withPath(path: string): ForkRepositoryBasicDto {
        this['path'] = path;
        return this;
    }
    public withDevelopMode(developMode: string): ForkRepositoryBasicDto {
        this['develop_mode'] = developMode;
        return this;
    }
    public set developMode(developMode: string  | undefined) {
        this['develop_mode'] = developMode;
    }
    public get developMode(): string | undefined {
        return this['develop_mode'];
    }
    public withVisibility(visibility: string): ForkRepositoryBasicDto {
        this['visibility'] = visibility;
        return this;
    }
    public withSecurity(security: string): ForkRepositoryBasicDto {
        this['security'] = security;
        return this;
    }
    public withStarCount(starCount: number): ForkRepositoryBasicDto {
        this['star_count'] = starCount;
        return this;
    }
    public set starCount(starCount: number  | undefined) {
        this['star_count'] = starCount;
    }
    public get starCount(): number | undefined {
        return this['star_count'];
    }
    public withForksCount(forksCount: number): ForkRepositoryBasicDto {
        this['forks_count'] = forksCount;
        return this;
    }
    public set forksCount(forksCount: number  | undefined) {
        this['forks_count'] = forksCount;
    }
    public get forksCount(): number | undefined {
        return this['forks_count'];
    }
    public withOpenMergeRequestsCount(openMergeRequestsCount: number): ForkRepositoryBasicDto {
        this['open_merge_requests_count'] = openMergeRequestsCount;
        return this;
    }
    public set openMergeRequestsCount(openMergeRequestsCount: number  | undefined) {
        this['open_merge_requests_count'] = openMergeRequestsCount;
    }
    public get openMergeRequestsCount(): number | undefined {
        return this['open_merge_requests_count'];
    }
    public withStarred(starred: boolean): ForkRepositoryBasicDto {
        this['starred'] = starred;
        return this;
    }
    public withNameWithNamespace(nameWithNamespace: string): ForkRepositoryBasicDto {
        this['name_with_namespace'] = nameWithNamespace;
        return this;
    }
    public set nameWithNamespace(nameWithNamespace: string  | undefined) {
        this['name_with_namespace'] = nameWithNamespace;
    }
    public get nameWithNamespace(): string | undefined {
        return this['name_with_namespace'];
    }
    public withLastActivityAt(lastActivityAt: string): ForkRepositoryBasicDto {
        this['last_activity_at'] = lastActivityAt;
        return this;
    }
    public set lastActivityAt(lastActivityAt: string  | undefined) {
        this['last_activity_at'] = lastActivityAt;
    }
    public get lastActivityAt(): string | undefined {
        return this['last_activity_at'];
    }
    public withCreatedAt(createdAt: string): ForkRepositoryBasicDto {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
}