

export class CreateManualImageSyncRepoRequestBody {
    public imageTag: Array<string>;
    public override?: boolean;
    public remoteNamespace: string;
    public remoteRegionId: string;
    public constructor(imageTag?: any, remoteNamespace?: any, remoteRegionId?: any) { 
        this['imageTag'] = imageTag;
        this['remoteNamespace'] = remoteNamespace;
        this['remoteRegionId'] = remoteRegionId;
    }
    public withImageTag(imageTag: Array<string>): CreateManualImageSyncRepoRequestBody {
        this['imageTag'] = imageTag;
        return this;
    }
    public withOverride(override: boolean): CreateManualImageSyncRepoRequestBody {
        this['override'] = override;
        return this;
    }
    public withRemoteNamespace(remoteNamespace: string): CreateManualImageSyncRepoRequestBody {
        this['remoteNamespace'] = remoteNamespace;
        return this;
    }
    public withRemoteRegionId(remoteRegionId: string): CreateManualImageSyncRepoRequestBody {
        this['remoteRegionId'] = remoteRegionId;
        return this;
    }
}