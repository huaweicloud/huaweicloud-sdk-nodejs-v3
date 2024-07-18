import { PostcheckCluserResponseMetadata } from './PostcheckCluserResponseMetadata';
import { PostcheckClusterResponseBodyStatus } from './PostcheckClusterResponseBodyStatus';
import { PostcheckSpec } from './PostcheckSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAutopilotPostCheckResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PostcheckCluserResponseMetadata;
    public spec?: PostcheckSpec;
    public status?: PostcheckClusterResponseBodyStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreateAutopilotPostCheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreateAutopilotPostCheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PostcheckCluserResponseMetadata): CreateAutopilotPostCheckResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PostcheckSpec): CreateAutopilotPostCheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PostcheckClusterResponseBodyStatus): CreateAutopilotPostCheckResponse {
        this['status'] = status;
        return this;
    }
}