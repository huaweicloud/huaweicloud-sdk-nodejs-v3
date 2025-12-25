import { DownloadFolderInfo } from './DownloadFolderInfo';


export class RepositoryBasicDO {
    public id?: string;
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
    public repoType?: string;
    public policy?: string;
    public tabId?: string;
    public repositoryName?: string;
    public displayName?: string;
    public description?: string;
    public projectId?: string;
    public includesPattern?: string;
    public deploymentPolicy?: string;
    public shareRight?: string;
    public url?: string;
    public packageType?: string;
    public storageSummaryInfo?: DownloadFolderInfo;
    public constructor() { 
    }
    public withId(id: string): RepositoryBasicDO {
        this['id'] = id;
        return this;
    }
    public withStatus(status: string): RepositoryBasicDO {
        this['status'] = status;
        return this;
    }
    public withDomainId(domainId: string): RepositoryBasicDO {
        this['domainId'] = domainId;
        return this;
    }
    public withRegion(region: string): RepositoryBasicDO {
        this['region'] = region;
        return this;
    }
    public withCreatedTime(createdTime: string): RepositoryBasicDO {
        this['createdTime'] = createdTime;
        return this;
    }
    public withModifiedTime(modifiedTime: string): RepositoryBasicDO {
        this['modifiedTime'] = modifiedTime;
        return this;
    }
    public withCreatedUserId(createdUserId: string): RepositoryBasicDO {
        this['createdUserId'] = createdUserId;
        return this;
    }
    public withCreatedUserName(createdUserName: string): RepositoryBasicDO {
        this['createdUserName'] = createdUserName;
        return this;
    }
    public withModifiedUserId(modifiedUserId: string): RepositoryBasicDO {
        this['modifiedUserId'] = modifiedUserId;
        return this;
    }
    public withModifiedUserName(modifiedUserName: string): RepositoryBasicDO {
        this['modifiedUserName'] = modifiedUserName;
        return this;
    }
    public withName(name: string): RepositoryBasicDO {
        this['name'] = name;
        return this;
    }
    public withDisable(disable: boolean): RepositoryBasicDO {
        this['disable'] = disable;
        return this;
    }
    public withFormat(format: string): RepositoryBasicDO {
        this['format'] = format;
        return this;
    }
    public withRepoType(repoType: string): RepositoryBasicDO {
        this['repoType'] = repoType;
        return this;
    }
    public withPolicy(policy: string): RepositoryBasicDO {
        this['policy'] = policy;
        return this;
    }
    public withTabId(tabId: string): RepositoryBasicDO {
        this['tabId'] = tabId;
        return this;
    }
    public withRepositoryName(repositoryName: string): RepositoryBasicDO {
        this['repositoryName'] = repositoryName;
        return this;
    }
    public withDisplayName(displayName: string): RepositoryBasicDO {
        this['displayName'] = displayName;
        return this;
    }
    public withDescription(description: string): RepositoryBasicDO {
        this['description'] = description;
        return this;
    }
    public withProjectId(projectId: string): RepositoryBasicDO {
        this['projectId'] = projectId;
        return this;
    }
    public withIncludesPattern(includesPattern: string): RepositoryBasicDO {
        this['includesPattern'] = includesPattern;
        return this;
    }
    public withDeploymentPolicy(deploymentPolicy: string): RepositoryBasicDO {
        this['deploymentPolicy'] = deploymentPolicy;
        return this;
    }
    public withShareRight(shareRight: string): RepositoryBasicDO {
        this['shareRight'] = shareRight;
        return this;
    }
    public withUrl(url: string): RepositoryBasicDO {
        this['url'] = url;
        return this;
    }
    public withPackageType(packageType: string): RepositoryBasicDO {
        this['packageType'] = packageType;
        return this;
    }
    public withStorageSummaryInfo(storageSummaryInfo: DownloadFolderInfo): RepositoryBasicDO {
        this['storageSummaryInfo'] = storageSummaryInfo;
        return this;
    }
}