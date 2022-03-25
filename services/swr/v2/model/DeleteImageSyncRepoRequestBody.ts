

export class DeleteImageSyncRepoRequestBody {
    public remoteRegionId: string;
    public remoteNamespace: string;
    public constructor(remoteRegionId?: any, remoteNamespace?: any) { 
        this['remoteRegionId'] = remoteRegionId;
        this['remoteNamespace'] = remoteNamespace;
    }
    public withRemoteRegionId(remoteRegionId: string): DeleteImageSyncRepoRequestBody {
        this['remoteRegionId'] = remoteRegionId;
        return this;
    }
    public withRemoteNamespace(remoteNamespace: string): DeleteImageSyncRepoRequestBody {
        this['remoteNamespace'] = remoteNamespace;
        return this;
    }
}