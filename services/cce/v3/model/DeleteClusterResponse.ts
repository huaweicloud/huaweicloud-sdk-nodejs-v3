import { ClusterMetadata } from './ClusterMetadata';
import { ClusterSpec } from './ClusterSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ClusterMetadata;
    public spec?: ClusterSpec;
    public constructor() { 
        super();
    }
    public withKind(kind: string): DeleteClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): DeleteClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ClusterMetadata): DeleteClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterSpec): DeleteClusterResponse {
        this['spec'] = spec;
        return this;
    }
}