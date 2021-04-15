import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNodePoolResponse extends SdkResponse {
    public apiVersion?: string;
    public kind?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolSpec;
    public status?: NodePoolStatus;
    public constructor() { 
        super();
    }
    public withApiVersion(apiVersion: string): ShowNodePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withKind(kind: string): ShowNodePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): ShowNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): ShowNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodePoolStatus): ShowNodePoolResponse {
        this['status'] = status;
        return this;
    }
}