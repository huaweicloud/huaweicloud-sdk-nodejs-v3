

export class SyncJob {
    public createdAt: string;
    public domainID: string;
    public domainName: string;
    public id: number;
    public namespace: string;
    public override: boolean;
    public remoteNamespace: string;
    public remoteRegionId: string;
    public repoName: string;
    public status: string;
    public syncOperatorId: string;
    public syncOperatorName: string;
    public tag: string;
    public updatedAt: string;
    public constructor(createdAt?: any, domainID?: any, domainName?: any, id?: any, namespace?: any, override?: any, remoteNamespace?: any, remoteRegionId?: any, repoName?: any, status?: any, syncOperatorId?: any, syncOperatorName?: any, tag?: any, updatedAt?: any) { 
        this['createdAt'] = createdAt;
        this['domainID'] = domainID;
        this['domainName'] = domainName;
        this['id'] = id;
        this['namespace'] = namespace;
        this['override'] = override;
        this['remoteNamespace'] = remoteNamespace;
        this['remoteRegionId'] = remoteRegionId;
        this['repoName'] = repoName;
        this['status'] = status;
        this['syncOperatorId'] = syncOperatorId;
        this['syncOperatorName'] = syncOperatorName;
        this['tag'] = tag;
        this['updatedAt'] = updatedAt;
    }
    public withCreatedAt(createdAt: string): SyncJob {
        this['createdAt'] = createdAt;
        return this;
    }
    public withDomainID(domainID: string): SyncJob {
        this['domainID'] = domainID;
        return this;
    }
    public withDomainName(domainName: string): SyncJob {
        this['domainName'] = domainName;
        return this;
    }
    public withId(id: number): SyncJob {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): SyncJob {
        this['namespace'] = namespace;
        return this;
    }
    public withOverride(override: boolean): SyncJob {
        this['override'] = override;
        return this;
    }
    public withRemoteNamespace(remoteNamespace: string): SyncJob {
        this['remoteNamespace'] = remoteNamespace;
        return this;
    }
    public withRemoteRegionId(remoteRegionId: string): SyncJob {
        this['remoteRegionId'] = remoteRegionId;
        return this;
    }
    public withRepoName(repoName: string): SyncJob {
        this['repoName'] = repoName;
        return this;
    }
    public withStatus(status: string): SyncJob {
        this['status'] = status;
        return this;
    }
    public withSyncOperatorId(syncOperatorId: string): SyncJob {
        this['syncOperatorId'] = syncOperatorId;
        return this;
    }
    public withSyncOperatorName(syncOperatorName: string): SyncJob {
        this['syncOperatorName'] = syncOperatorName;
        return this;
    }
    public withTag(tag: string): SyncJob {
        this['tag'] = tag;
        return this;
    }
    public withUpdatedAt(updatedAt: string): SyncJob {
        this['updatedAt'] = updatedAt;
        return this;
    }
}