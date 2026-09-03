import { ArtifactInfo } from './ArtifactInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFtArtifactsResponse extends SdkResponse {
    public total?: number;
    private 'artifact_info'?: Array<ArtifactInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListFtArtifactsResponse {
        this['total'] = total;
        return this;
    }
    public withArtifactInfo(artifactInfo: Array<ArtifactInfo>): ListFtArtifactsResponse {
        this['artifact_info'] = artifactInfo;
        return this;
    }
    public set artifactInfo(artifactInfo: Array<ArtifactInfo>  | undefined) {
        this['artifact_info'] = artifactInfo;
    }
    public get artifactInfo(): Array<ArtifactInfo> | undefined {
        return this['artifact_info'];
    }
}