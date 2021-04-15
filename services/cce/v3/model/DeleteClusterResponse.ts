import { ClusterMetadata } from './ClusterMetadata';
import { ClusterStatus } from './ClusterStatus';
import { V3ClusterSpec } from './V3ClusterSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteClusterResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ClusterMetadata;
    public spec?: V3ClusterSpec;
    public status?: ClusterStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): DeleteClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): DeleteClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ClusterMetadata): DeleteClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3ClusterSpec): DeleteClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterStatus): DeleteClusterResponse {
        this['status'] = status;
        return this;
    }
}