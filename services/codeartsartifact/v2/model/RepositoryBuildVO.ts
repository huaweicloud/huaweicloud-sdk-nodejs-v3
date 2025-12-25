

export class RepositoryBuildVO {
    public username?: string;
    public password?: string;
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
    public withUsername(username: string): RepositoryBuildVO {
        this['username'] = username;
        return this;
    }
    public withPassword(password: string): RepositoryBuildVO {
        this['password'] = password;
        return this;
    }
    public withStatus(status: string): RepositoryBuildVO {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): RepositoryBuildVO {
        this['domainId'] = domainId;
        return this;
    }
    public withRegion(region: string): RepositoryBuildVO {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): RepositoryBuildVO {
        this['createdTime'] = createdTime;
        return this;
    }
    public withModifiedTime(modifiedTime: string): RepositoryBuildVO {
        this['modifiedTime'] = modifiedTime;
        return this;
    }
    public withCreatedUserId(createdUserId: string): RepositoryBuildVO {
        this['createdUserId'] = createdUserId;
        return this;
    }
    public withCreatedUserName(createdUserName: string): RepositoryBuildVO {
        this['createdUserName'] = createdUserName;
        return this;
    }
    public withModifiedUserId(modifiedUserId: string): RepositoryBuildVO {
        this['modifiedUserId'] = modifiedUserId;
        return this;
    }
    public withModifiedUserName(modifiedUserName: string): RepositoryBuildVO {
        this['modifiedUserName'] = modifiedUserName;
        return this;
    }
    public withName(name: string): RepositoryBuildVO {
        this['name'] = name;
        return this;
    }
    public withDisable(disable: boolean): RepositoryBuildVO {
        this['disable'] = disable;
        return this;
    }
    public withFormat(format: string): RepositoryBuildVO {
        this['format'] = format;
        return this;
    }
    public withType(type: string): RepositoryBuildVO {
        this['type'] = type;
        return this;
    }
    public withPolicy(policy: string): RepositoryBuildVO {
        this['policy'] = policy;
        return this;
    }
    public withTabId(tabId: string): RepositoryBuildVO {
        this['tabId'] = tabId;
        return this;
    }
    public withRepositoryName(repositoryName: string): RepositoryBuildVO {
        this['repositoryName'] = repositoryName;
        return this;
    }
    public withDisplayName(displayName: string): RepositoryBuildVO {
        this['displayName'] = displayName;
        return this;
    }
    public withDescription(description: string): RepositoryBuildVO {
        this['description'] = description;
        return this;
    }
    public withSnapshot(snapshot: string): RepositoryBuildVO {
        this['snapshot'] = snapshot;
        return this;
    }
    public withRelease(release: string): RepositoryBuildVO {
        this['release'] = release;
        return this;
    }
    public withNpm(npm: string): RepositoryBuildVO {
        this['npm'] = npm;
        return this;
    }
    public withSnapshotStatus(snapshotStatus: string): RepositoryBuildVO {
        this['snapshotStatus'] = snapshotStatus;
        return this;
    }
    public withReleaseStatus(releaseStatus: string): RepositoryBuildVO {
        this['releaseStatus'] = releaseStatus;
        return this;
    }
    public withProjectId(projectId: string): RepositoryBuildVO {
        this['projectId'] = projectId;
        return this;
    }
    public withIncludesPattern(includesPattern: string): RepositoryBuildVO {
        this['includesPattern'] = includesPattern;
        return this;
    }
    public withRepositoryIds(repositoryIds: Array<string>): RepositoryBuildVO {
        this['repositoryIds'] = repositoryIds;
        return this;
    }
    public withUri(uri: string): RepositoryBuildVO {
        this['uri'] = uri;
        return this;
    }
    public withDeploymentPolicy(deploymentPolicy: string): RepositoryBuildVO {
        this['deploymentPolicy'] = deploymentPolicy;
        return this;
    }
    public withRepositories(repositories: Array<string>): RepositoryBuildVO {
        this['repositories'] = repositories;
        return this;
    }
    public withParentRepoName(parentRepoName: string): RepositoryBuildVO {
        this['parentRepoName'] = parentRepoName;
        return this;
    }
    public withUserName(userName: string): RepositoryBuildVO {
        this['userName'] = userName;
        return this;
    }
    public withRemoteUrl(remoteUrl: string): RepositoryBuildVO {
        this['remoteUrl'] = remoteUrl;
        return this;
    }
    public withDefaultDeployRepository(defaultDeployRepository: string): RepositoryBuildVO {
        this['defaultDeployRepository'] = defaultDeployRepository;
        return this;
    }
    public withRemoteType(remoteType: string): RepositoryBuildVO {
        this['remoteType'] = remoteType;
        return this;
    }
    public withProxy(proxy: string): RepositoryBuildVO {
        this['proxy'] = proxy;
        return this;
    }
    public withAllowAnonymous(allowAnonymous: boolean): RepositoryBuildVO {
        this['allowAnonymous'] = allowAnonymous;
        return this;
    }
    public withAutoCleanSnapshot(autoCleanSnapshot: boolean): RepositoryBuildVO {
        this['autoCleanSnapshot'] = autoCleanSnapshot;
        return this;
    }
    public withSnapshotAliveDays(snapshotAliveDays: string): RepositoryBuildVO {
        this['snapshotAliveDays'] = snapshotAliveDays;
        return this;
    }
    public withMaxUniqueSnapshots(maxUniqueSnapshots: string): RepositoryBuildVO {
        this['maxUniqueSnapshots'] = maxUniqueSnapshots;
        return this;
    }
    public withShareRight(shareRight: string): RepositoryBuildVO {
        this['shareRight'] = shareRight;
        return this;
    }
    public withNexuRepo(nexuRepo: boolean): RepositoryBuildVO {
        this['nexuRepo'] = nexuRepo;
        return this;
    }
    public withUrl(url: string): RepositoryBuildVO {
        this['url'] = url;
        return this;
    }
    public withPackageType(packageType: string): RepositoryBuildVO {
        this['packageType'] = packageType;
        return this;
    }
}