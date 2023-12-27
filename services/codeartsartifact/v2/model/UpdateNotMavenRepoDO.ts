

export class UpdateNotMavenRepoDO {
    private 'repo_name'?: string;
    public format?: string;
    public description?: string;
    private 'repository_ids'?: Array<string>;
    private 'includes_pattern'?: string;
    private 'deployment_policy'?: string;
    private 'auto_clean_snapshot'?: boolean;
    private 'snapshot_alive_days'?: string;
    private 'max_unique_snapshots'?: string;
    private 'allow_anonymous'?: boolean;
    public constructor(repoName?: string, format?: string, repositoryIds?: Array<string>) { 
        this['repo_name'] = repoName;
        this['format'] = format;
        this['repository_ids'] = repositoryIds;
    }
    public withRepoName(repoName: string): UpdateNotMavenRepoDO {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withFormat(format: string): UpdateNotMavenRepoDO {
        this['format'] = format;
        return this;
    }
    public withDescription(description: string): UpdateNotMavenRepoDO {
        this['description'] = description;
        return this;
    }
    public withRepositoryIds(repositoryIds: Array<string>): UpdateNotMavenRepoDO {
        this['repository_ids'] = repositoryIds;
        return this;
    }
    public set repositoryIds(repositoryIds: Array<string>  | undefined) {
        this['repository_ids'] = repositoryIds;
    }
    public get repositoryIds(): Array<string> | undefined {
        return this['repository_ids'];
    }
    public withIncludesPattern(includesPattern: string): UpdateNotMavenRepoDO {
        this['includes_pattern'] = includesPattern;
        return this;
    }
    public set includesPattern(includesPattern: string  | undefined) {
        this['includes_pattern'] = includesPattern;
    }
    public get includesPattern(): string | undefined {
        return this['includes_pattern'];
    }
    public withDeploymentPolicy(deploymentPolicy: string): UpdateNotMavenRepoDO {
        this['deployment_policy'] = deploymentPolicy;
        return this;
    }
    public set deploymentPolicy(deploymentPolicy: string  | undefined) {
        this['deployment_policy'] = deploymentPolicy;
    }
    public get deploymentPolicy(): string | undefined {
        return this['deployment_policy'];
    }
    public withAutoCleanSnapshot(autoCleanSnapshot: boolean): UpdateNotMavenRepoDO {
        this['auto_clean_snapshot'] = autoCleanSnapshot;
        return this;
    }
    public set autoCleanSnapshot(autoCleanSnapshot: boolean  | undefined) {
        this['auto_clean_snapshot'] = autoCleanSnapshot;
    }
    public get autoCleanSnapshot(): boolean | undefined {
        return this['auto_clean_snapshot'];
    }
    public withSnapshotAliveDays(snapshotAliveDays: string): UpdateNotMavenRepoDO {
        this['snapshot_alive_days'] = snapshotAliveDays;
        return this;
    }
    public set snapshotAliveDays(snapshotAliveDays: string  | undefined) {
        this['snapshot_alive_days'] = snapshotAliveDays;
    }
    public get snapshotAliveDays(): string | undefined {
        return this['snapshot_alive_days'];
    }
    public withMaxUniqueSnapshots(maxUniqueSnapshots: string): UpdateNotMavenRepoDO {
        this['max_unique_snapshots'] = maxUniqueSnapshots;
        return this;
    }
    public set maxUniqueSnapshots(maxUniqueSnapshots: string  | undefined) {
        this['max_unique_snapshots'] = maxUniqueSnapshots;
    }
    public get maxUniqueSnapshots(): string | undefined {
        return this['max_unique_snapshots'];
    }
    public withAllowAnonymous(allowAnonymous: boolean): UpdateNotMavenRepoDO {
        this['allow_anonymous'] = allowAnonymous;
        return this;
    }
    public set allowAnonymous(allowAnonymous: boolean  | undefined) {
        this['allow_anonymous'] = allowAnonymous;
    }
    public get allowAnonymous(): boolean | undefined {
        return this['allow_anonymous'];
    }
}