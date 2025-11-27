import { ClusterGroupSpec } from './ClusterGroupSpec';
import { ClusterGroupStatus } from './ClusterGroupStatus';
import { ObjectMeta } from './ObjectMeta';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterGroupResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: ObjectMeta;
    public spec?: ClusterGroupSpec;
    public status?: ClusterGroupStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): ShowClusterGroupResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): ShowClusterGroupResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: ObjectMeta): ShowClusterGroupResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: ClusterGroupSpec): ShowClusterGroupResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: ClusterGroupStatus): ShowClusterGroupResponse {
        this['status'] = status;
        return this;
    }
}