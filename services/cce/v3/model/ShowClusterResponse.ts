import { ClusterStatus } from './ClusterStatus';
import { ShowClusterMetadata } from './ShowClusterMetadata';
import { V3ClusterSpec } from './V3ClusterSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: ShowClusterMetadata;
    public spec?: V3ClusterSpec;
    public status?: ClusterStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: ShowClusterMetadata): ShowClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: V3ClusterSpec): ShowClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterStatus): ShowClusterResponse {
        this['status'] = status;
        return this;
    }
}