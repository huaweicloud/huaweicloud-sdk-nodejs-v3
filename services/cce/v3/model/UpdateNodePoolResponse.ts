import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';
import { NodePoolStatus } from './NodePoolStatus';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNodePoolResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolSpec;
    public status?: NodePoolStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): UpdateNodePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): UpdateNodePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): UpdateNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): UpdateNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: NodePoolStatus): UpdateNodePoolResponse {
        this['status'] = status;
        return this;
    }
}