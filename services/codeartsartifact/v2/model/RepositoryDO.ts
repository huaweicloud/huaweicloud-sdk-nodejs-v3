

export class RepositoryDO {
    public status?: string;
    public domainId?: string;
    public region?: string;
    public createdTime?: string;
    public modifiedTime?: string;
    public createdUserId?: string;
    public createdUserName?: string;
    public modifiedUserId?: string;
    public modifiedUserName?: string;
    public name?: string;
    public disable?: boolean;
    public format?: string;
    public type?: string;
    public policy?: string;
    public tabId?: string;
    public repositoryName?: string;
    public displayName?: string;
    public description?: string;
    public snapshot?: string;
    public release?: string;
    public npm?: string;
    public snapshotStatus?: string;
    public releaseStatus?: string;
    public projectId?: string;
    public includesPattern?: string;
    public repositoryIds?: Array<string>;
    public uri?: string;
    public deploymentPolicy?: string;
    public repositories?: Array<string>;
    public parentRepoName?: string;
    public userName?: string;
    public password?: string;
    public remoteUrl?: string;
    public defaultDeployRepository?: string;
    public remoteType?: string;
    public proxy?: string;
    public allowAnonymous?: boolean;
    public autoCleanSnapshot?: boolean;
    public snapshotAliveDays?: string;
    public maxUniqueSnapshots?: string;
    public shareRight?: string;
    public nexuRepo?: boolean;
    public url?: string;
    public packageType?: string;
    public constructor() { 
    }
    public withStatus(status: string): RepositoryDO {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): RepositoryDO {
        this['domainId'] = domainId;
        return this;
    }
    public withRegion(region: string): RepositoryDO {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): RepositoryDO {
        this['createdTime'] = createdTime;
        return this;
    }
    public withModifiedTime(modifiedTime: string): RepositoryDO {
        this['modifiedTime'] = modifiedTime;
        return this;
    }
    public withCreatedUserId(createdUserId: string): RepositoryDO {
        this['createdUserId'] = createdUserId;
        return this;
    }
    public withCreatedUserName(createdUserName: string): RepositoryDO {
        this['createdUserName'] = createdUserName;
        return this;
    }
    public withModifiedUserId(modifiedUserId: string): RepositoryDO {
        this['modifiedUserId'] = modifiedUserId;
        return this;
    }
    public withModifiedUserName(modifiedUserName: string): RepositoryDO {
        this['modifiedUserName'] = modifiedUserName;
        return this;
    }
    public withName(name: string): RepositoryDO {
        this['name'] = name;
        return this;
    }
    public withDisable(disable: boolean): RepositoryDO {
        this['disable'] = disable;
        return this;
    }
    public withFormat(format: string): RepositoryDO {
        this['format'] = format;
        return this;
    }
    public withType(type: string): RepositoryDO {
        this['type'] = type;
        return this;
    }
    public withPolicy(policy: string): RepositoryDO {
        this['policy'] = policy;
        return this;
    }
    public withTabId(tabId: string): RepositoryDO {
        this['tabId'] = tabId;
        return this;
    }
    public withRepositoryName(repositoryName: string): RepositoryDO {
        this['repositoryName'] = repositoryName;
        return this;
    }
    public withDisplayName(displayName: string): RepositoryDO {
        this['displayName'] = displayName;
        return this;
    }
    public withDescription(description: string): RepositoryDO {
        this['description'] = description;
        return this;
    }
    public withSnapshot(snapshot: string): RepositoryDO {
        this['snapshot'] = snapshot;
        return this;
    }
    public withRelease(release: string): RepositoryDO {
        this['release'] = release;
        return this;
    }
    public withNpm(npm: string): RepositoryDO {
        this['npm'] = npm;
        return this;
    }
    public withSnapshotStatus(snapshotStatus: string): RepositoryDO {
        this['snapshotStatus'] = snapshotStatus;
        return this;
    }
    public withReleaseStatus(releaseStatus: string): RepositoryDO {
        this['releaseStatus'] = releaseStatus;
        return this;
    }
    public withProjectId(projectId: string): RepositoryDO {
        this['projectId'] = projectId;
        return this;
    }
    public withIncludesPattern(includesPattern: string): RepositoryDO {
        this['includesPattern'] = includesPattern;
        return this;
    }
    public withRepositoryIds(repositoryIds: Array<string>): RepositoryDO {
        this['repositoryIds'] = repositoryIds;
        return this;
    }
    public withUri(uri: string): RepositoryDO {
        this['uri'] = uri;
        return this;
    }
    public withDeploymentPolicy(deploymentPolicy: string): RepositoryDO {
        this['deploymentPolicy'] = deploymentPolicy;
        return this;
    }
    public withRepositories(repositories: Array<string>): RepositoryDO {
        this['repositories'] = repositories;
        return this;
    }
    public withParentRepoName(parentRepoName: string): RepositoryDO {
        this['parentRepoName'] = parentRepoName;
        return this;
    }
    public withUserName(userName: string): RepositoryDO {
        this['userName'] = userName;
        return this;
    }
    public withPassword(password: string): RepositoryDO {
        this['password'] = password;
        return this;
    }
    public withRemoteUrl(remoteUrl: string): RepositoryDO {
        this['remoteUrl'] = remoteUrl;
        return this;
    }
    public withDefaultDeployRepository(defaultDeployRepository: string): RepositoryDO {
        this['defaultDeployRepository'] = defaultDeployRepository;
        return this;
    }
    public withRemoteType(remoteType: string): RepositoryDO {
        this['remoteType'] = remoteType;
        return this;
    }
    public withProxy(proxy: string): RepositoryDO {
        this['proxy'] = proxy;
        return this;
    }
    public withAllowAnonymous(allowAnonymous: boolean): RepositoryDO {
        this['allowAnonymous'] = allowAnonymous;
        return this;
    }
    public withAutoCleanSnapshot(autoCleanSnapshot: boolean): RepositoryDO {
        this['autoCleanSnapshot'] = autoCleanSnapshot;
        return this;
    }
    public withSnapshotAliveDays(snapshotAliveDays: string): RepositoryDO {
        this['snapshotAliveDays'] = snapshotAliveDays;
        return this;
    }
    public withMaxUniqueSnapshots(maxUniqueSnapshots: string): RepositoryDO {
        this['maxUniqueSnapshots'] = maxUniqueSnapshots;
        return this;
    }
    public withShareRight(shareRight: string): RepositoryDO {
        this['shareRight'] = shareRight;
        return this;
    }
    public withNexuRepo(nexuRepo: boolean): RepositoryDO {
        this['nexuRepo'] = nexuRepo;
        return this;
    }
    public withUrl(url: string): RepositoryDO {
        this['url'] = url;
        return this;
    }
    public withPackageType(packageType: string): RepositoryDO {
        this['packageType'] = packageType;
        return this;
    }
}