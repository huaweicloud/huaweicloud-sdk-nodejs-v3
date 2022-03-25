

export class CreateImageSyncRepoRequestBody {
    public remoteRegionId: string;
    public remoteNamespace: string;
    public syncAuto?: boolean;
    public override?: boolean;
    public constructor(remoteRegionId?: any, remoteNamespace?: any) { 
        this['remoteRegionId'] = remoteRegionId;
        this['remoteNamespace'] = remoteNamespace;
    }
    public withRemoteRegionId(remoteRegionId: string): CreateImageSyncRepoRequestBody {
        this['remoteRegionId'] = remoteRegionId;
        return this;
    }
    public withRemoteNamespace(remoteNamespace: string): CreateImageSyncRepoRequestBody {
        this['remoteNamespace'] = remoteNamespace;
        return this;
    }
    public withSyncAuto(syncAuto: boolean): CreateImageSyncRepoRequestBody {
        this['syncAuto'] = syncAuto;
        return this;
    }
    public withOverride(override: boolean): CreateImageSyncRepoRequestBody {
        this['override'] = override;
        return this;
    }
}