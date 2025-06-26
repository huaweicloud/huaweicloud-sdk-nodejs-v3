import { Artifact } from './Artifact';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceArtifactsResponse extends SdkResponse {
    public artifacts?: Array<Artifact>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withArtifacts(artifacts: Array<Artifact>): ListInstanceArtifactsResponse {
        this['artifacts'] = artifacts;
        return this;
    }
    public withTotal(total: number): ListInstanceArtifactsResponse {
        this['total'] = total;
        return this;
    }
}