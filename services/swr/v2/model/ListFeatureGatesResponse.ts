
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFeatureGatesResponse extends SdkResponse {
    public enableDomainName?: boolean;
    public enableCombinationRetention?: boolean;
    public enableArtifactScanning?: boolean;
    public enableArtifactGc?: boolean;
    public enableRepositoryTag?: boolean;
    public enableNamespaceTag?: boolean;
    public enableArtifactMetadata?: boolean;
    public constructor() { 
        super();
    }
    public withEnableDomainName(enableDomainName: boolean): ListFeatureGatesResponse {
        this['enableDomainName'] = enableDomainName;
        return this;
    }
    public withEnableCombinationRetention(enableCombinationRetention: boolean): ListFeatureGatesResponse {
        this['enableCombinationRetention'] = enableCombinationRetention;
        return this;
    }
    public withEnableArtifactScanning(enableArtifactScanning: boolean): ListFeatureGatesResponse {
        this['enableArtifactScanning'] = enableArtifactScanning;
        return this;
    }
    public withEnableArtifactGc(enableArtifactGc: boolean): ListFeatureGatesResponse {
        this['enableArtifactGc'] = enableArtifactGc;
        return this;
    }
    public withEnableRepositoryTag(enableRepositoryTag: boolean): ListFeatureGatesResponse {
        this['enableRepositoryTag'] = enableRepositoryTag;
        return this;
    }
    public withEnableNamespaceTag(enableNamespaceTag: boolean): ListFeatureGatesResponse {
        this['enableNamespaceTag'] = enableNamespaceTag;
        return this;
    }
    public withEnableArtifactMetadata(enableArtifactMetadata: boolean): ListFeatureGatesResponse {
        this['enableArtifactMetadata'] = enableArtifactMetadata;
        return this;
    }
}