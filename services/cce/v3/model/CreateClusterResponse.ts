import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ClusterMetadata;
    public spec?: ClusterSpec;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ClusterMetadata): CreateClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterSpec): CreateClusterResponse {
        this['spec'] = spec;
        return this;
    }
}