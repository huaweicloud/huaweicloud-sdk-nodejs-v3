

export class SyncRepo {
    public createdAt: string;
    public domainID: string;
    public domainName: string;
    public id: number;
    public namespace: string;
    public override: boolean;
    public remoteNamespace: string;
    public remoteRegionId: string;
    public repoName: string;
    public syncAuto: boolean;
    public updatedAt: string;
    public constructor(createdAt?: any, domainID?: any, domainName?: any, id?: any, namespace?: any, override?: any, remoteNamespace?: any, remoteRegionId?: any, repoName?: any, syncAuto?: any, updatedAt?: any) { 
        this['createdAt'] = createdAt;
        this['domainID'] = domainID;
        this['domainName'] = domainName;
        this['id'] = id;
        this['namespace'] = namespace;
        this['override'] = override;
        this['remoteNamespace'] = remoteNamespace;
        this['remoteRegionId'] = remoteRegionId;
        this['repoName'] = repoName;
        this['syncAuto'] = syncAuto;
        this['updatedAt'] = updatedAt;
    }
    public withCreatedAt(createdAt: string): SyncRepo {
        this['createdAt'] = createdAt;
        return this;
    }
    public withDomainID(domainID: string): SyncRepo {
        this['domainID'] = domainID;
        return this;
    }
    public withDomainName(domainName: string): SyncRepo {
        this['domainName'] = domainName;
        return this;
    }
    public withId(id: number): SyncRepo {
        this['id'] = id;
        return this;
    }
    public withNamespace(namespace: string): SyncRepo {
        this['namespace'] = namespace;
        return this;
    }
    public withOverride(override: boolean): SyncRepo {
        this['override'] = override;
        return this;
    }
    public withRemoteNamespace(remoteNamespace: string): SyncRepo {
        this['remoteNamespace'] = remoteNamespace;
        return this;
    }
    public withRemoteRegionId(remoteRegionId: string): SyncRepo {
        this['remoteRegionId'] = remoteRegionId;
        return this;
    }
    public withRepoName(repoName: string): SyncRepo {
        this['repoName'] = repoName;
        return this;
    }
    public withSyncAuto(syncAuto: boolean): SyncRepo {
        this['syncAuto'] = syncAuto;
        return this;
    }
    public withUpdatedAt(updatedAt: string): SyncRepo {
        this['updatedAt'] = updatedAt;
        return this;
    }
}