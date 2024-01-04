import { PostcheckCluserResponseMetadata } from './PostcheckCluserResponseMetadata';
import { PostcheckClusterResponseBodyStatus } from './PostcheckClusterResponseBodyStatus';
import { PostcheckSpec } from './PostcheckSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreatePostCheckResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: PostcheckCluserResponseMetadata;
    public spec?: PostcheckSpec;
    public status?: PostcheckClusterResponseBodyStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): CreatePostCheckResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): CreatePostCheckResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: PostcheckCluserResponseMetadata): CreatePostCheckResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: PostcheckSpec): CreatePostCheckResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: PostcheckClusterResponseBodyStatus): CreatePostCheckResponse {
        this['status'] = status;
        return this;
    }
}