import { CreateNodePoolStatus } from './CreateNodePoolStatus';
import { NodePoolMetadata } from './NodePoolMetadata';
import { NodePoolSpec } from './NodePoolSpec';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNodePoolResponse extends SdkResponse {
    public kind?: string;
    public apiVersion?: string;
    public metadata?: NodePoolMetadata;
    public spec?: NodePoolSpec;
    public status?: CreateNodePoolStatus;
    public constructor() { 
        super();
    }
    public withKind(kind: string): CreateNodePoolResponse {
        this['kind'] = kind;
        return this;
    }
    public withApiVersion(apiVersion: string): CreateNodePoolResponse {
        this['apiVersion'] = apiVersion;
        return this;
    }
    public withMetadata(metadata: NodePoolMetadata): CreateNodePoolResponse {
        this['metadata'] = metadata;
        return this;
    }
    public withSpec(spec: NodePoolSpec): CreateNodePoolResponse {
        this['spec'] = spec;
        return this;
    }
    public withStatus(status: CreateNodePoolStatus): CreateNodePoolResponse {
        this['status'] = status;
        return this;
    }
}