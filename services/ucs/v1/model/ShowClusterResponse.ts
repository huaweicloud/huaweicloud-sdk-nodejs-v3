import { ClusterSpec } from './ClusterSpec';
import { ClusterStatus } from './ClusterStatus';
import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: ClusterSpec;
    public status?: ClusterStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowClusterResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowClusterResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowClusterResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterSpec): ShowClusterResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterStatus): ShowClusterResponse {
        this['status'] = status;
        return this;
    }
}