import { BasicDOV5 } from './BasicDOV5';


export class RepositoryDOV5 {
    public status?: string;
    private 'domain_id'?: string;
    public region?: string;
    private 'created_time'?: string;
    private 'modified_time'?: string;
    private 'created_user_id'?: string;
    private 'created_user_name'?: string;
    private 'modified_user_id'?: string;
    private 'modified_user_name'?: string;
    private 'repository_name'?: string;
    public format?: string;
    public type?: string;
    public description?: string;
    public release?: string;
    public snapshot?: string;
    private 'includes_pattern'?: string;
    private 'excludes_pattern'?: string;
    private 'share_right'?: string;
    private 'project_id'?: string;
    public name?: string;
    public disable?: boolean;
    public policy?: string;
    public npm?: string;
    public uri?: string;
    public repositories?: string;
    private 'user_name'?: string;
    public password?: string;
    public proxy?: string;
    public scope?: number;
    public url?: string;
    private 'tab_id'?: string;
    private 'display_name'?: string;
    private 'snapshot_status'?: string;
    private 'release_status'?: string;
    private 'repository_ids'?: string;
    private 'deployment_policy'?: string;
    private 'parent_repo_name'?: string;
    private 'remote_url'?: string;
    private 'remote_auth'?: string;
    private 'pypi_registry_url'?: string;
    private 'default_deploy_repository'?: string;
    private 'package_type'?: string;
    private 'nexu_repo'?: boolean;
    private 'migrate_flag'?: number;
    public constructor() { 
    }
    public withStatus(status: string): RepositoryDOV5 {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): RepositoryDOV5 {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withRegion(region: string): RepositoryDOV5 {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): RepositoryDOV5 {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: string  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): string | undefined {
        return this['created_time'];
    }
    public withModifiedTime(modifiedTime: string): RepositoryDOV5 {
        this['modified_time'] = modifiedTime;
        return this;
    }
    public set modifiedTime(modifiedTime: string  | undefined) {
        this['modified_time'] = modifiedTime;
    }
    public get modifiedTime(): string | undefined {
        return this['modified_time'];
    }
    public withCreatedUserId(createdUserId: string): RepositoryDOV5 {
        this['created_user_id'] = createdUserId;
        return this;
    }
    public set createdUserId(createdUserId: string  | undefined) {
        this['created_user_id'] = createdUserId;
    }
    public get createdUserId(): string | undefined {
        return this['created_user_id'];
    }
    public withCreatedUserName(createdUserName: string): RepositoryDOV5 {
        this['created_user_name'] = createdUserName;
        return this;
    }
    public set createdUserName(createdUserName: string  | undefined) {
        this['created_user_name'] = createdUserName;
    }
    public get createdUserName(): string | undefined {
        return this['created_user_name'];
    }
    public withModifiedUserId(modifiedUserId: string): RepositoryDOV5 {
        this['modified_user_id'] = modifiedUserId;
        return this;
    }
    public set modifiedUserId(modifiedUserId: string  | undefined) {
        this['modified_user_id'] = modifiedUserId;
    }
    public get modifiedUserId(): string | undefined {
        return this['modified_user_id'];
    }
    public withModifiedUserName(modifiedUserName: string): RepositoryDOV5 {
        this['modified_user_name'] = modifiedUserName;
        return this;
    }
    public set modifiedUserName(modifiedUserName: string  | undefined) {
        this['modified_user_name'] = modifiedUserName;
    }
    public get modifiedUserName(): string | undefined {
        return this['modified_user_name'];
    }
    public withRepositoryName(repositoryName: string): RepositoryDOV5 {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withFormat(format: string): RepositoryDOV5 {
        this['format'] = format;
        return this;
    }
    public withType(type: string): RepositoryDOV5 {
        this['type'] = type;
        return this;
    }
    public withDescription(description: string): RepositoryDOV5 {
        this['description'] = description;
        return this;
    }
    public withRelease(release: string): RepositoryDOV5 {
        this['release'] = release;
        return this;
    }
    public withSnapshot(snapshot: string): RepositoryDOV5 {
        this['snapshot'] = snapshot;
        return this;
    }
    public withIncludesPattern(includesPattern: string): RepositoryDOV5 {
        this['includes_pattern'] = includesPattern;
        return this;
    }
    public set includesPattern(includesPattern: string  | undefined) {
        this['includes_pattern'] = includesPattern;
    }
    public get includesPattern(): string | undefined {
        return this['includes_pattern'];
    }
    public withExcludesPattern(excludesPattern: string): RepositoryDOV5 {
        this['excludes_pattern'] = excludesPattern;
        return this;
    }
    public set excludesPattern(excludesPattern: string  | undefined) {
        this['excludes_pattern'] = excludesPattern;
    }
    public get excludesPattern(): string | undefined {
        return this['excludes_pattern'];
    }
    public withShareRight(shareRight: string): RepositoryDOV5 {
        this['share_right'] = shareRight;
        return this;
    }
    public set shareRight(shareRight: string  | undefined) {
        this['share_right'] = shareRight;
    }
    public get shareRight(): string | undefined {
        return this['share_right'];
    }
    public withProjectId(projectId: string): RepositoryDOV5 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withName(name: string): RepositoryDOV5 {
        this['name'] = name;
        return this;
    }
    public withDisable(disable: boolean): RepositoryDOV5 {
        this['disable'] = disable;
        return this;
    }
    public withPolicy(policy: string): RepositoryDOV5 {
        this['policy'] = policy;
        return this;
    }
    public withNpm(npm: string): RepositoryDOV5 {
        this['npm'] = npm;
        return this;
    }
    public withUri(uri: string): RepositoryDOV5 {
        this['uri'] = uri;
        return this;
    }
    public withRepositories(repositories: string): RepositoryDOV5 {
        this['repositories'] = repositories;
        return this;
    }
    public withUserName(userName: string): RepositoryDOV5 {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPassword(password: string): RepositoryDOV5 {
        this['password'] = password;
        return this;
    }
    public withProxy(proxy: string): RepositoryDOV5 {
        this['proxy'] = proxy;
        return this;
    }
    public withScope(scope: number): RepositoryDOV5 {
        this['scope'] = scope;
        return this;
    }
    public withUrl(url: string): RepositoryDOV5 {
        this['url'] = url;
        return this;
    }
    public withTabId(tabId: string): RepositoryDOV5 {
        this['tab_id'] = tabId;
        return this;
    }
    public set tabId(tabId: string  | undefined) {
        this['tab_id'] = tabId;
    }
    public get tabId(): string | undefined {
        return this['tab_id'];
    }
    public withDisplayName(displayName: string): RepositoryDOV5 {
        this['display_name'] = displayName;
        return this;
    }
    public set displayName(displayName: string  | undefined) {
        this['display_name'] = displayName;
    }
    public get displayName(): string | undefined {
        return this['display_name'];
    }
    public withSnapshotStatus(snapshotStatus: string): RepositoryDOV5 {
        this['snapshot_status'] = snapshotStatus;
        return this;
    }
    public set snapshotStatus(snapshotStatus: string  | undefined) {
        this['snapshot_status'] = snapshotStatus;
    }
    public get snapshotStatus(): string | undefined {
        return this['snapshot_status'];
    }
    public withReleaseStatus(releaseStatus: string): RepositoryDOV5 {
        this['release_status'] = releaseStatus;
        return this;
    }
    public set releaseStatus(releaseStatus: string  | undefined) {
        this['release_status'] = releaseStatus;
    }
    public get releaseStatus(): string | undefined {
        return this['release_status'];
    }
    public withRepositoryIds(repositoryIds: string): RepositoryDOV5 {
        this['repository_ids'] = repositoryIds;
        return this;
    }
    public set repositoryIds(repositoryIds: string  | undefined) {
        this['repository_ids'] = repositoryIds;
    }
    public get repositoryIds(): string | undefined {
        return this['repository_ids'];
    }
    public withDeploymentPolicy(deploymentPolicy: string): RepositoryDOV5 {
        this['deployment_policy'] = deploymentPolicy;
        return this;
    }
    public set deploymentPolicy(deploymentPolicy: string  | undefined) {
        this['deployment_policy'] = deploymentPolicy;
    }
    public get deploymentPolicy(): string | undefined {
        return this['deployment_policy'];
    }
    public withParentRepoName(parentRepoName: string): RepositoryDOV5 {
        this['parent_repo_name'] = parentRepoName;
        return this;
    }
    public set parentRepoName(parentRepoName: string  | undefined) {
        this['parent_repo_name'] = parentRepoName;
    }
    public get parentRepoName(): string | undefined {
        return this['parent_repo_name'];
    }
    public withRemoteUrl(remoteUrl: string): RepositoryDOV5 {
        this['remote_url'] = remoteUrl;
        return this;
    }
    public set remoteUrl(remoteUrl: string  | undefined) {
        this['remote_url'] = remoteUrl;
    }
    public get remoteUrl(): string | undefined {
        return this['remote_url'];
    }
    public withRemoteAuth(remoteAuth: string): RepositoryDOV5 {
        this['remote_auth'] = remoteAuth;
        return this;
    }
    public set remoteAuth(remoteAuth: string  | undefined) {
        this['remote_auth'] = remoteAuth;
    }
    public get remoteAuth(): string | undefined {
        return this['remote_auth'];
    }
    public withPypiRegistryUrl(pypiRegistryUrl: string): RepositoryDOV5 {
        this['pypi_registry_url'] = pypiRegistryUrl;
        return this;
    }
    public set pypiRegistryUrl(pypiRegistryUrl: string  | undefined) {
        this['pypi_registry_url'] = pypiRegistryUrl;
    }
    public get pypiRegistryUrl(): string | undefined {
        return this['pypi_registry_url'];
    }
    public withDefaultDeployRepository(defaultDeployRepository: string): RepositoryDOV5 {
        this['default_deploy_repository'] = defaultDeployRepository;
        return this;
    }
    public set defaultDeployRepository(defaultDeployRepository: string  | undefined) {
        this['default_deploy_repository'] = defaultDeployRepository;
    }
    public get defaultDeployRepository(): string | undefined {
        return this['default_deploy_repository'];
    }
    public withPackageType(packageType: string): RepositoryDOV5 {
        this['package_type'] = packageType;
        return this;
    }
    public set packageType(packageType: string  | undefined) {
        this['package_type'] = packageType;
    }
    public get packageType(): string | undefined {
        return this['package_type'];
    }
    public withNexuRepo(nexuRepo: boolean): RepositoryDOV5 {
        this['nexu_repo'] = nexuRepo;
        return this;
    }
    public set nexuRepo(nexuRepo: boolean  | undefined) {
        this['nexu_repo'] = nexuRepo;
    }
    public get nexuRepo(): boolean | undefined {
        return this['nexu_repo'];
    }
    public withMigrateFlag(migrateFlag: number): RepositoryDOV5 {
        this['migrate_flag'] = migrateFlag;
        return this;
    }
    public set migrateFlag(migrateFlag: number  | undefined) {
        this['migrate_flag'] = migrateFlag;
    }
    public get migrateFlag(): number | undefined {
        return this['migrate_flag'];
    }
}