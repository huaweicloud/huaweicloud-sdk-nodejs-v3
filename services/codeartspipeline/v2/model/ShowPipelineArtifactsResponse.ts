import { Artifact } from './Artifact';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowPipelineArtifactsResponse extends SdkResponse {
    public artifacts?: Array<Artifact>;
    public constructor() { 
        super();
    }
    public withArtifacts(artifacts: Array<Artifact>): ShowPipelineArtifactsResponse {
        this['artifacts'] = artifacts;
        return this;
    }
}