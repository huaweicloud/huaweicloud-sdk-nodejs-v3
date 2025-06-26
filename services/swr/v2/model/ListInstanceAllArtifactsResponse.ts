import { Artifact } from './Artifact';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceAllArtifactsResponse extends SdkResponse {
    public artifacts?: Array<Artifact>;
    private 'next_marker'?: number;
    public constructor() { 
        super();
    }
    public withArtifacts(artifacts: Array<Artifact>): ListInstanceAllArtifactsResponse {
        this['artifacts'] = artifacts;
        return this;
    }
    public withNextMarker(nextMarker: number): ListInstanceAllArtifactsResponse {
        this['next_marker'] = nextMarker;
        return this;
    }
    public set nextMarker(nextMarker: number  | undefined) {
        this['next_marker'] = nextMarker;
    }
    public get nextMarker(): number | undefined {
        return this['next_marker'];
    }
}